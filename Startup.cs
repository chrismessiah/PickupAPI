﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using pickupAPI.Data;

namespace pickupAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Globals.ReadEnviromentVariables();
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // *********** CONFIGURES POSTRES FOR GIVEN CONTEXTS VIA DEP. INJ. *********
            var connectionString = Globals.env["DOTNET_ENV"] == "Production" ? Globals.env["CONNECTION_STRING"] : Configuration.GetConnectionString("DatabaseUrl");

            services.AddEntityFrameworkNpgsql().AddDbContext<pickupDbContext>(options => options.UseNpgsql(connectionString));
            // *********** CONFIGURES POSTRES FOR GIVEN CONTEXTS VIA DEP. INJ. *********

            services.AddMvc(); // Add framework services.
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, pickupDbContext context)
        {
            // MIGRATE DATABASE IF PRODUCTION
            if (Globals.env["DOTNET_ENV"] == "Production")
            {
                context.Database.Migrate();
            }
            // MIGRATE DATABASE IF PRODUCTION

            // Makes the API open for any queries
            // !!!!!!!!! NOT SECURE !!!!!!!!
            // !!!!!!!!! NOT SECURE !!!!!!!!
            // !!!!!!!!! NOT SECURE !!!!!!!!
            app.UseCors(options => options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().AllowCredentials());

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            if (Globals.env["DOTNET_ENV"] == "Production")
            {
                app.UseStaticFiles();
            }
            else
            {
                app.UseStaticFiles(new StaticFileOptions()
                {
                    OnPrepareResponse = context2 =>
                    {
                        context2.Context.Response.Headers.Add("Cache-Control", "no-cache, no-store");
                        context2.Context.Response.Headers.Add("Expires", "-1");
                    }
                });
            }
            app.UseMvc();
        }
    }
}

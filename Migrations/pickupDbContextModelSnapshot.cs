﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using PickupAPI.Data;
using System;

namespace PickupAPI.Migrations
{
    [DbContext(typeof(PickupDbContext))]
    partial class PickupDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125");

            modelBuilder.Entity("PickupAPI.Models.Pickup", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Body")
                        .IsRequired()
                        .HasMaxLength(10000);

                    b.Property<DateTime>("ShowUntil");

                    b.HasKey("Id");

                    b.ToTable("Pickups");
                });
#pragma warning restore 612, 618
        }
    }
}

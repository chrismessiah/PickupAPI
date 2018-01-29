--
-- PostgreSQL database dump
--

-- Dumped from database version 10.1
-- Dumped by pg_dump version 10.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: pickups; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "pickups" (
    "Id" integer NOT NULL,
    "Body" character varying(10000) NOT NULL,
    "ShowUntil" timestamp without time zone DEFAULT '0001-01-01 00:00:00'::timestamp without time zone NOT NULL
);


--
-- Name: __EFMigrationsHistory; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "__EFMigrationsHistory" (
    "MigrationId" character varying(150) NOT NULL,
    "ProductVersion" character varying(32) NOT NULL
);


--
-- Name: pickups_Id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "pickups_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pickups_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "pickups_Id_seq" OWNED BY "pickups"."Id";


--
-- Name: pickups Id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "pickups" ALTER COLUMN "Id" SET DEFAULT nextval('"pickups_Id_seq"'::regclass);


--
-- Data for Name: pickups; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "pickups" ("Id", "Body", "ShowUntil") FROM stdin;
10030	Are you a parking ticket? ‘Cause you’ve got fine written all over you.	2078-01-27 09:36:35.722797
10066	There must be something wrong with my eyes, I can’t take them off you.	2078-01-27 09:36:35.742731
10059	Do you have a pencil? Cause I want to erase your past and write our future.	2078-01-27 09:36:35.74945
10031	Do you know what my shirt is made of? Boyfriend/girlfriend material?	2078-01-27 09:36:35.723478
10073	When I was walking by, I noticed you stalking so.. what’s up?	2078-01-27 09:36:35.761697
10074	Your shirt has to go, but you can stay.	2078-01-27 09:36:35.761738
10067	I was wondering if you had an extra heart. Mine was just stolen.	2078-01-27 09:36:35.756141
10032	I seem to have lost my phone number. Can I have yours?	2078-01-27 09:36:35.723715
10040	Did the sun come out or did you just smile at me?	2078-01-27 09:36:35.73098
10033	I’m lost. Can you give me directions to your heart?	2078-01-27 09:36:35.72444
10076	Hello. Cupid called. He wants to tell you that he needs my heart back.	2078-01-27 09:36:35.76035
10069	Hi, how was heaven when you left it?	2078-01-27 09:36:35.756721
10041	Was your dad a boxer? Because damn, you’re a knockout!	2078-01-27 09:36:35.725818
10034	Are you sure you’re not tired? You’ve been running through my mind all day.	2078-01-27 09:36:35.724652
10077	Hey, tie your shoes! I don’t want you falling for anyone else.	2078-01-27 09:36:35.76165
10042	I may not be a genie, but I can make your dreams come true.	2078-01-27 09:36:35.731527
10078	You know what material this is? [Grab your shirt] Boyfriend material.	2078-01-27 09:36:35.77065
10050	I’d say God Bless you, but it looks like he already did.	2078-01-27 09:36:35.743793
10043	Was you father an alien? Because there’s nothing else like you on Earth!	2078-01-27 09:36:35.73413
10036	Is there an airport nearby or is it my heart taking off?	2078-01-27 09:36:35.725752
10001	Do I know you? ‘Cause you look a lot like my next girlfriend/boyfriend.	2078-01-27 09:36:35.71822
10079	You might be asked to leave soon. You are making the other women look bad.	2078-01-27 09:36:35.772117
10002	I’m not a photographer, but I can picture me and you together.	2078-01-27 09:36:35.71717
10044	Is your name Google? Because you have everything I’ve been searching for.	2078-01-27 09:36:35.732972
10052	If nothing lasts forever, will you be my nothing?	2078-01-27 09:36:35.744647
10045	Hey, you’re pretty and I’m cute. Together we’d be Pretty Cute.	2078-01-27 09:36:35.733015
10038	Do you believe in love at first sight or should I pass by again?	2078-01-27 09:36:35.727369
10003	Are you religious? Because you’re the answer to all my prayers.	2078-01-27 09:36:35.721577
10060	Are you my phone charger? Because without you, I’d die.	2078-01-27 09:36:35.751414
10053	Hello, I’m a thief, and I’m here to steal your heart.	2078-01-27 09:36:35.745964
10046	Is it hot in here or is it just you?	2078-01-27 09:36:35.742762
10029	They say Disneyland is the happiest place on earth. Well apparently, no one has ever been standing next to you.	2078-01-27 09:36:35.719937
10065	Are you a dictionary? Cause you’re adding meaning to my life.	2078-01-27 09:36:35.755761
10039	Can I follow you home? Cause my parents always told me to follow my dreams.	2078-01-27 09:36:35.729578
10004	For some reason, I was feeling a little off today. But when you came along, you definitely turned me on.	2078-01-27 09:36:35.72241
10047	You must be a broom, ‘cause you just swept me off my feet.	2078-01-27 09:36:35.742786
10061	You don’t need keys to drive me crazy.	2078-01-27 09:36:35.752854
10054	Are you from Tennessee? Because you’re the only ten I see!	2078-01-27 09:36:35.746706
10055	I must be in a museum, because you truly are a work of art.	2078-01-27 09:36:35.747086
10048	There’s only one thing I want to change about you, and that’s your last name.	2078-01-27 09:36:35.742975
10063	You remind me of a magnet, because you sure are attracting me over here!	2078-01-27 09:36:35.755288
10056	I’m sorry, were you talking to me? [No] Well then, please start.	2078-01-27 09:36:35.747756
10049	Is your dad a terrorist? Cause you’re the bomb.	2078-01-27 09:36:35.743586
10071	Are you from Russia? ‘Cause you’re russian my heart rate!	2078-01-27 09:36:35.76035
10064	Didn’t I see you on the cover of Vogue?	2078-01-27 09:36:35.755981
10072	My buddies bet me that I wouldn’t be able to start a conversation with the hottest person in the bar. Wanna buy some drinks with their money?	2078-01-27 09:36:35.760475
10075	Kanye feel the love tonight?	2078-01-27 09:36:35.762473
10068	Somebody call the cops, because it’s got to be illegal to look that good!	2078-01-27 09:36:35.757464
10000	Are you a magician? Because whenever I look at you, everyone else disappears!	2078-01-27 09:36:35.714982
10035	Aside from being sexy, what do you do for a living?	2078-01-27 09:36:35.726493
10051	Can you take me to the doctor? Because I just broke my leg falling for you.	2078-01-27 09:36:35.743793
10037	Would you grab my arm, so I can tell my friends I’ve been touched by an angel?	2078-01-27 09:36:35.726458
10062	Sorry, but you owe me a drink. [Why?] Because when I looked at you, I dropped mine.	2078-01-27 09:36:35.755027
10070	I’m no mathematician, but I’m pretty good with numbers. Tell you what, give me yours and watch what I can do with it.	2078-01-27 09:36:35.757812
10057	Was your father a thief? ‘Cause someone stole the stars from the sky and put them in your eyes.	2078-01-27 09:36:35.748131
10058	Did it hurt? When you fell from heaven?	2078-01-27 09:36:35.748496
\.


--
-- Data for Name: __EFMigrationsHistory; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "__EFMigrationsHistory" ("MigrationId", "ProductVersion") FROM stdin;
20180127080238_First Migration	2.0.1-rtm-125
20180127083400_2nd Migration	2.0.1-rtm-125
\.


--
-- Name: pickups_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"pickups_Id_seq"', 79, true);


--
-- Name: __EFMigrationsHistory PK___EFMigrationsHistory; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "__EFMigrationsHistory"
    ADD CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY ("MigrationId");


--
-- Name: pickups PK_pickups; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "pickups"
    ADD CONSTRAINT "PK_pickups" PRIMARY KEY ("Id");


--
-- PostgreSQL database dump complete
--


drop database if exists users_events_db;
create database users_events_db;
use users_events_db;

drop table if exists users;
drop table if exists signed_up_participants;

CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `display_name` varchar(30) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `pw` varchar(30) NOT NULL,
  `is_participant` tinyint(1) NOT NULL DEFAULT '0',
  `is_admin` tinyint(1) NOT NULL DEFAULT '0',
  `is_super` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `display_name_UNIQUE` (`display_name`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `signed_up_participants` (
  `event_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`event_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `events` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `event_title` varchar(45) NOT NULL,
  `event_description` varchar(500) NOT NULL DEFAULT 'A Description',
  `event_URL` varchar(100) NOT NULL,
  `event_start_date` date NOT NULL,
  `event_end_date` date NOT NULL,
  `event_city` varchar(45) NOT NULL,
  `event_address` varchar(45) NOT NULL,
  `event_is_active` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`event_id`),
  UNIQUE KEY `event_id_UNIQUE` (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


insert into users (display_name,user_name,pw)
values('display name', 'user name', 'password');

insert into signed_up_participants(event_id,user_id)
values(10,2);

insert into events(user_id,event_title,event_URL,event_start_date,event_end_date,event_city,event_address)
values(21, "Dancing with the Stars", "http://www.dance2night.com", '2020-12-05', '2020-12-06', "Orlando", "123 Municipal Drive");

# show tables
#select * from users;
#select * from signed_up_participants;

select * from events;
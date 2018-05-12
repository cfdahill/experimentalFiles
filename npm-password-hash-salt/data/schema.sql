create database userlogin_db;

use userlogin_db;

create table userlogin
(
id int NOT NULL auto_increment,
userid varchar(25) not null,
password varchar(25) not null,
primary key (id)
);
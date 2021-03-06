# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
email           | string    | not null, indexed, unique
session_token   | string    | not null, indexed
password_digest | string    | not null
blurb           | text      | 
google_uid      | integer   |
facebook_uid    | integer   |

## bunnies
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed

## chores
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
details     | text/json | not null

## linkings (join table)

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
chore_id    | integer   | not null, foreign key (references chores), indexed
room_id     | integer   | not null, foreign key (references rooms), indexed

## rooms
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, indexed, unique
description | text      | not null

## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
bunny_id    | integer   | not null, foreign key (references bunnies), indexed
parent_id   | integer   | not null, foreign key (references users), indexed
chore_id    | integer   | not null, foreign key (references chores), indexed
room_id     | integer   | not null, foreign key (references rooms), indexed
details     | text/json | not null
date        | datetime  | not null
completed   | boolean   | default false

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
booking_id  | integer   | not null, foreign key (references bookings), indexed
positive    | boolean   | default true
body        | text      |

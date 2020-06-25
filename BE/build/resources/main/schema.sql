drop table if exists issue_assignee;
drop table if exists comment;
drop table if exists issue_label;
drop table if exists issue;
drop table if exists label;
drop table if exists milestone;
drop table if exists user;


create table user (
    user_id bigint primary key auto_increment,
    name varchar(256),
    url varchar(512)
);


create table milestone (
    milestone_id bigint primary key auto_increment,
    title varchar(512),
    description text,
    due_date varchar(255)
);

create table issue (
    issue_id bigint primary key auto_increment,
    title varchar (255),
    content varchar (255),
    opened_date varchar(255),
    closed_date varchar(255),
    opened bit(1),
    author_id bigint references user(user_id),
    milestone_id bigint references milestone(milestone_id)
);
create table label (
    label_id int primary key auto_increment,
    textColor varchar (255),
    backGroundColor varchar (255),
    description varchar (255),
    labelName varchar (255)
);

create table issue_label (
    issue_id int references issue(issue_id),
    label_id int references label(label_id)
);

create table comment (
    comment_id bigint primary key auto_increment,
    issue_id bigint references issue (issue_id),
    author_id bigint references user (user_id),
    description text
);

create table issue_assignee (
    assignee_id bigint references user(user_id),
    issue_id bigint references issue(issue_id)
);

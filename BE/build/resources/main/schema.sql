drop table if exists issue_label;
drop table if exists issue;
drop table if exists label;

create table issue (
    issue_id int primary key,
    title varchar (255),
    content varchar (255),
    opened_date date,
    closed_date date,
    opened bit(1)
);

create table label (
    label_id int primary key,
    textColor varchar (255),
    backGroundColor varchar (255),
    description varchar (255),
    labelName varchar (255)
);

create table issue_label (
    issue_id int references issue(issue_id),
    label_id int references label(label_id)
);
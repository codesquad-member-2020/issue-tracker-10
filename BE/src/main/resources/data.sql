INSERT INTO milestone (title, description, due_date ) VALUES ('spring 공부', 'spring 공부하기', NOW());
INSERT INTO milestone (title, description, due_date ) VALUES ('java 공부', 'java 공부하기', NOW());
INSERT INTO milestone (title, description, due_date ) VALUES ('더워', 'java 공부하기', NOW());


insert into user (user_id, name, url) VALUES (1, 'bohyeon', 'https://avatars3.githubusercontent.com/u/52371228?s=460&u=a8d3d9d22c8a07e5393f265f211585f1a956f3d8&v=4');
insert into user (user_id, name, url) VALUES (2, 'xp', 'https://avatars3.githubusercontent.com/u/52371228?s=460&u=a8d3d9d22c8a07e5393f265f211585f1a956f3d8&v=4');

insert into issue (issue_id, title, content, opened_date, closed_date, opened, milestone_id, author_id) values (1, 'eat healthy', 'eat organic stuff', '2020-06-11T12:48:28+09:00', 'tbd', 1, 1, 1);
insert into issue (issue_id, title, content, opened_date, closed_date, opened, milestone_id, author_id) values (2, 'eat healthy', 'eat organic stuff', '2020-06-11T12:48:28+09:00', 'tbd', 1, 1, 1);
insert into issue (issue_id, title, content, opened_date, closed_date, opened, milestone_id, author_id) values (3, 'eat healthy', 'eat organic stuff', '2020-06-11T12:48:28+09:00', 'tbd', 0, 2, 1);


insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (1, '#fff', 'rgb(203,92,208)', 'testing label1', 'group 10 is the best');
insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (2, '#fff', 'rgb(254,40,119)', 'testing label2', 'XP is beyond silver');
insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (3, '#fff', 'rgb(86,185,42)', 'testing label3', 'Hoi is Korean tiger');
insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (4, '#fff', 'rgb(118,148,231)', 'testing label4', 'Taek is TaekSin');
insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (5, '#000', 'rgb(128,177,104)', 'testing label5', 'Ellie is Alligator');

insert into issue_label (issue_id, label_id) VALUES (1, 1);
insert into issue_label (issue_id, label_id) VALUES (1, 2);
insert into issue_label (issue_id, label_id) VALUES (1, 3);
insert into issue_label (issue_id, label_id) VALUES (2, 1);
insert into issue_label (issue_id, label_id) VALUES (2, 2);
insert into issue_label (issue_id, label_id) VALUES (2, 3);
insert into issue_label (issue_id, label_id) VALUES (3, 1);

insert into issue_assignee (assignee_id, issue_id) VALUES (1,1);

insert into comment (comment_id, issue_id, author_id, description) VALUES (1, 1, 1, '호텔 신라 코딩');
insert into comment (comment_id, issue_id, author_id, description) VALUES (2, 1, 1, '호텔 신라 코딩?');

insert into comment (comment_id, issue_id, author_id, description) VALUES (3, 2, 1, '호텔 신라 코딩2');
insert into comment (comment_id, issue_id, author_id, description) VALUES (4, 3, 1, '호텔 신라 코딩3');

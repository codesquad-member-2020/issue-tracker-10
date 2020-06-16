INSERT INTO milestone (title, description, due_date ) VALUES ('spring 공부', 'spring 공부하기', NOW());
INSERT INTO milestone (title, description, due_date ) VALUES ('java 공부', 'java 공부하기', NOW());

insert into issue (issue_id, title, content, opened_date, closed_date, opened, milestone_id) values (1, 'eat healthy', 'eat organic stuff', '2020-06-01', '2020-06-03', 1, 1);
insert into issue (issue_id, title, content, opened_date, closed_date, opened, milestone_id) values (2, 'eat healthy', 'eat organic stuff', '2020-06-01', '2020-06-03', 1, 1);
insert into issue (issue_id, title, content, opened_date, closed_date, opened, milestone_id) values (3, 'eat healthy', 'eat organic stuff', '2020-06-01', '2020-06-03', 0, 2);

insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (1, '#FFFFF1', '#1E90FF1', 'testing label1', 'BE');
insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (2, '#FFFFF2', '#1E90FF2', 'testing label2', 'BE');
insert into label (label_id, textColor, backGroundColor, description, labelName) VALUES (3, '#FFFFF3', '#1E90FF3', 'testing label3', 'BE');

insert into issue_label (issue_id, label_id) VALUES (1, 1);
insert into issue_label (issue_id, label_id) VALUES (1, 2);
insert into issue_label (issue_id, label_id) VALUES (1, 3);
insert into issue_label (issue_id, label_id) VALUES (2, 1);
insert into issue_label (issue_id, label_id) VALUES (2, 2);
insert into issue_label (issue_id, label_id) VALUES (2, 3);
insert into issue_label (issue_id, label_id) VALUES (3, 1);

insert into user (email) VALUES ('bohyeon-n');

insert into comment(issue_id, author_id, content) VALUES (1, 1, '임병주 손칼국수 vs 라공방');
insert into comment(issue_id, author_id, content) VALUES (1, 1, '둘 중에 뭘 먹을까요');
insert into comment(issue_id, author_id, content) VALUES (1, 1, '맞아요 먹으러 나왔어요');



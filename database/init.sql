CREATE TABLE Users(
		id int NOT NULL PRIMARY KEY,
		name nvarchar(50) NOT NULL,
		surname nvarchar(50) NOT NULL,
		email nvarchar(50) NOT NULL,
		password nvarchar(200) NOT NULL,			 
)

CREATE TABLE UserFriends(
	idUser int NOT NULL FOREIGN KEY REFERENCES Users(id),
	idFriend int NOT NULL FOREIGN KEY REFERENCES Users(id),
)

CREATE TABLE Posts(
	id int NOT NULL PRIMARY KEY,
	idUser int NOT NULL FOREIGN KEY REFERENCES Users(id),
	content nvarchar(1000) NOT NULL,
	date datetime NOT NULL,
)
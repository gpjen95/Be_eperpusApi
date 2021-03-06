"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "naruto",
          email: "naruto@gmail.com",
          phone: "082198554482",
          status: "admin",
          password: "123",
        },
        {
          name: "sakura",
          email: "sakura@gmail.com",
          phone: "08127631324",
          status: "teacher",
          password: "123",
        },
        {
          name: "boruto",
          email: "boruto@gmail.com",
          phone: "082198554482",
          status: "student",
          password: "123",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};

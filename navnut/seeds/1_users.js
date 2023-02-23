/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const bcrypt = require('bcrypt')
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'cece', last_name: 'youance', user_name: 'cc', password: bcrypt.hashSync('ceceyouance',10), email: 'cc@gmail.com', achievement_id: '' },
    {first_name: 'tyler', last_name: 'thecreator', user_name: 'tylerthecreator', password: bcrypt.hashSync('tylerthecreator',10), email: 'tylerthecreator@gmail.com', achievement_id: '' },
    {first_name: 'destiny', last_name: 'mcdonald', user_name: 'desydesy123', password: bcrypt.hashSync('happymeal', 10), email: 'mcdonald@gmail.com', achievement_id: '' },
    {first_name: 'shaquan', last_name: 'clark', user_name: 'theaverageshaq', password: bcrypt.hashSync('password', 10), email: 'theaverageshaq@gmail.com',  achievement_id: '' },
    {first_name: 'kevin', last_name: 'garrison', user_name: 'kevin_garrison', password: bcrypt.hashSync('k@ng@r00', 10), email: 'thisgmailisformybills@gmail.com', achievement_id: '' },
    {first_name: 'jennifer', last_name: 'mattew', user_name: 'mynameisjennifer', password: bcrypt.hashSync('jupiter%777', 10), email: 'jennifer@gmail.com', achievement_id: '' },
    {first_name: 'morgan', last_name: 'wilson', user_name: 'butterFlyBaby', password: bcrypt.hashSync('butter21FlyBaby',10), email: 'morganwilson@gmail.com', achievement_id: '' },
    {first_name: 'chris', last_name: 'miller', user_name: 'therealchrismiller', password: bcrypt.hashSync('1234',10), email: 'iloveRihanna@gmail.com', achievement_id: '' },
    {first_name: 'sara', last_name: 'brown', user_name: 'saraCakes3000', password: bcrypt.hashSync('admin08',10), email: 'saea@gmail.com', achievement_id: '' },
    {first_name: 'emma', last_name: 'smith', user_name: 'cactusFlower', password: bcrypt.hashSync('abcde',10), email: 'es@gmail.com', achievement_id: '' },
  ])
}


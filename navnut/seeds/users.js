/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'cece', last_name: 'youance', user_name: 'cc', password: 'ceceyouance', email: 'cc@gmail.com',friends_id: 9, achievement_id: '' },
    {first_name: 'tyler', last_name: 'thecreator', user_name: 'tylerthecreator', password: 'tylerthecreator', email: 'tylerthecreator@gmail.com',friends_id: 1, achievement_id: '' },
    {first_name: 'destiny', last_name: 'mcdonald', user_name: 'desydesy123', password: 'happymeal', email: 'mcdonald@gmail.com',friends_id: 1 , achievement_id: '' },
    {first_name: 'shaquan', last_name: 'clark', user_name: 'theaverageshaq', password: 'password', email: 'theaverageshaq@gmail.com',friends_id: 1, achievement_id: '' },
    {first_name: 'kevin', last_name: 'garrison', user_name: 'kevin_garrison', password: 'k@ng@r00', email: 'thisgmailisformybills@gmail.com',friends_id: 1, achievement_id: '' },
    {first_name: 'jennifer', last_name: 'mattew', user_name: 'mynameisjennifer', password: 'jupiter%777', email: 'jennifer@gmail.com',friends_id: 1 , achievement_id: '' },
    {first_name: 'morgan', last_name: 'wilson', user_name: 'butterFlyBaby', password: 'butter21FlyBaby', email: 'morganwilson@gmail.com',friends_id: 2, achievement_id: '' },
    {first_name: 'chris', last_name: 'miller', user_name: 'therealchrismiller', password: '1234', email: 'iloveRihanna@gmail.com',friends_id: 4, achievement_id: '' },
    {first_name: 'sara', last_name: 'brown', user_name: 'saraCakes3000', password: 'admin08', email: 'saea@gmail.com',friends_id: 8 , achievement_id: '' },
    {first_name: 'emma', last_name: 'smith', user_name: 'cactusFlower', password: 'abcde', email: 'es@gmail.com',friends_id: 10, achievement_id: '' },
  ])
}

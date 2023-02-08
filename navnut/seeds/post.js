/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('post').del()
  await knex('post').insert([
    {post_date: '2023-01-27', post_message: "hello world I'm CC", user_id: 1 },
    {post_date: '2023-02-04', post_message: "feel alright right now", user_id: 8 },
    {post_date: '2023-02-03', post_message: 'BEST NIGHT EVER I FEEL SO HEALTHY', user_id: 2 },
    {post_date: '2023-01-29', post_message: "so thankful to have hit my goals", user_id: 9},
    {post_date: '2023-02-04', post_message: "feel alright right now I am nutritious", user_id: 3 },
    {post_date: '2023-02-03', post_message: 'looking for a buddy to hang out with', user_id: 4 },
    {post_date: '2023-01-29', post_message: "GULITY: I had Popeyes fries today", user_id: 5},
    {post_date: '2023-02-04', post_message: "My stocmach has gotten so much better thanks Navigation Nutrition", user_id: 6 },
    {post_date: '2023-02-03', post_message: 'Emma is my best friend', user_id: 10 },
    {post_date: '2023-01-28', post_message: 'I hungry im gonna look for a recipe', user_id: 7 }
  ]);
};

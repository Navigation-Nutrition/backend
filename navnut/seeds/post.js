/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('post').del()
  await knex('post').insert([
    {post_date: '2023-01-27', post_title:  "How Nutrtion Impacts Your Health", post_message:  "hello world I'm cece and I Belive nutrtion is very important for you. Studies show that it really helps ", user_id: 1 },
    {post_date: '2023-02-04', post_title:  "Why Nutrtion Is Good for the Brain", post_message:   "I feel alright right now because my brain is working well beacuse I have been treating myself very well with my brain", user_id: 8 },
    {post_date: '2023-02-03', post_title:  "Nutrtion Impacts Today", post_message:  'BEST NIGHT EVER I FEEL SO HEALTHY, nutrition is not the same that it used to be back in the day. We have gotten more mindful of the foods we eat yet our foods have gotten less natural', user_id: 2 },
    {post_date: '2023-01-29', post_title:  "NUTRTION FUN FACTS",post_message:  "so thankful to have hit my goals from this app, also I wanted to share some fun facts I got from here as well, such as Common types of sugar are corn syrup and table sugar.", user_id: 9},
    {post_date: '2023-02-04', post_title:  "why GOD gave you nutrtion?",post_message:  "Feel alright right now? We are nutritious because God wanted us to be! He strength to live a long and devoted life ", user_id: 3 },
    {post_date: '2023-02-03', post_title:  "Starting a Healthy Lifestyle",post_message:  'looking for a buddy to hang out with? Studies show how having a friend can help you live a more nutritious lifestyle', user_id: 4 },
    {post_date: '2023-01-29', post_title:  "Fun Facts about Nutrtion",post_message:  "GULITY: I had Popeyes fries today they are arelly bad for you when you look at the fun facts about them", user_id: 5},
    {post_date: '2023-02-04', post_title:  "Why brown sugar is better than white",post_message:  "My stomach has gotten so much better thanks Navigation Nutrition, I haved learned that brown sugar is better to consume than brown sugar", user_id: 6 },
    {post_date: '2023-02-03', post_title:  "HIP HIP HORRAY NUTRTION TODAY",post_message:  'This is a blog post just to celebrate how amazing nutrtion is and how happy my journey has been', user_id: 10 },
    {post_date: '2023-01-28', post_title:  "Why to count colors not calories", post_message:  'If im hungry and am gonna look for a recipe, I have realized that getting the plate to look pretty allows for more diversity along plate and makes my stomach happier', user_id: 7 }
  ]);
};

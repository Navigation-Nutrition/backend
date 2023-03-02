/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('post').del()
  await knex('post').insert([
    {img_url: "https://perinataltaskforce.com/wp-content/uploads/2021/06/Sankofa-Reproductive-Health-Logo-700x400-1.png", post_date: '2023-01-27', post_title:  "How Nutrition Impacts Your Health by Sankofa", post_message:  "hello world I'm cece and I Belive nutrtion is very important for you. Studies show that it really helps ", user_id: 1 },
    {img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyl2zbakSXMqtc6l_BiDACrjYxiwYSqi5hUg&usqp=CAU",post_date: '2023-02-04', post_title:  "Why Nutrition Is Good for the Brain", post_message:   "I feel alright right now because my brain is working well beacuse I have been treating myself very well with my brain", user_id: 8 },
    {img_url: "https://images.squarespace-cdn.com/content/v1/60420d26b68a5453a86a08d0/1655914407612-B35KKLD2GPDR9T4HZOP8/Images+for+use+%28700+x+400+px%29+%2834%29.jpg?format=1500w", post_date: '2023-02-03', post_title:  "Nutrtion Impacts Today", post_message:  'BEST NIGHT EVER I FEEL SO HEALTHY, nutrition is not the same that it used to be back in the day. We have gotten more mindful of the foods we eat yet our foods have gotten less natural', user_id: 2 },
    {img_url: "https://ih1.redbubble.net/image.820720757.5753/st,small,507x507-pad,600x600,f8f8f8.jpg", post_date: '2023-01-29', post_title:  "NUTRITION FUN FACTS", post_message:  "so thankful to have hit my goals from this app, also I wanted to share some fun facts I got from here as well, such as Common types of sugar are corn syrup and table sugar.", user_id: 9},
    {img_url: "http://coplac.org/wp-content/uploads/2017/01/Geneseo-2-700x400.jpg", post_date: '2023-02-04', post_title:  "why GOD gave you nutrition?",post_message:  "Feel alright right now? We are nutritious because God wanted us to be! He strength to live a long and devoted life ", user_id: 3 },
    {img_url: "https://i.pinimg.com/736x/af/48/54/af485452e2645b553f82ae3c58eb9499.jpg", post_date: '2023-02-03', post_title:  "Starting a Healthy Lifestyle",post_message:  'looking for a buddy to hang out with? Studies show how having a friend can help you live a more nutritious lifestyle', user_id: 4 },
    {img_url: "https://cdn.wallpapersafari.com/86/95/FIy0i5.jpg", post_date: '2023-01-29', post_title:  "Fun Facts about Nutrition",post_message:  "GULITY: I had Popeyes fries today they are arelly bad for you when you look at the fun facts about them", user_id: 5},
    {img_url: "https://img.buzzfeed.com/buzzfeed-static/static/2020-12/9/22/asset/c5df34772ebd/sub-buzz-88-1607554257-37.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto", post_date: '2023-02-04', post_title:  "Why brown sugar is better than white",post_message: "My stomach has gotten so much better thanks Navigation Nutrition, I haved learned that brown sugar is better to consume than brown sugar", user_id: 6 },
    {img_url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", post_date: '2023-02-03', post_title:  "HIP HIP HORRAY NUTRITION TODAY",post_message:  'This is a blog post just to celebrate how amazing nutrtion is and how happy my journey has been', user_id: 10 },
    {img_url: "https://chriskresser.com/wp-content/uploads/iStock-1141197352-sveta_zarzamora.jpg", post_date: '2023-01-28', post_title:  "Why to count colors not calories", post_message:  'If im hungry and am gonna look for a recipe, I have realized that getting the plate to look pretty allows for more diversity along plate and makes my stomach happier', user_id: 7 }
  ,{img_url: "https://j-entranslations.com/wp-content/uploads/2016/05/books-700x400.jpg", post_date: '2023-02-03', post_title:  "How nutrition imporved my reading ablity",post_message:  'I have learned to read better because I have been eating brain healthy food and now I feel like i am better at doing math and english and science art everything', user_id: 10 },
  ]);
};

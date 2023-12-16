💡 Inspiration 💡
Going into this hackathon, we knew we wanted to build software to bring communities together. If we were to take anything from the pandemic, it would be that local businesses and nonprofits are the glue of communities. Therefore, we wanted to create a hack that would benefit local businesses and nonprofits; so we came up with Handshake!

⚙️ What it does ⚙️
Handshake connects local businesses and nonprofits with eager students, who can gain experience and volunteering hours while also helping build their local community.

Students can sign up and add their skills, socials, and location. Then, they can use our ML-based recommendation engine to discover listings personalized, just for them. If they see a listing that greatly appeals to them, they can click the "request" button, and send a notification to the business that authored the listing.

Businesses can sign up and instantly create a new listing. They simply need to add a title and description, and our NER-based system will automatically find the skills required for the listing. Then, they can just wait for notifications from eager students that want to help them! Finally, they can contact these students via the contact info provided on the site or the "contact" button, which will redirect them to an email.

🛠️ How we built it 🛠️
The back-end API was mainly built using Flask and Flask-Restful. In order to conduct authentication and authorization, we used Flask-JWT-Extended. To store our data, we used Firebase’s Cloud Firestore.

To recommend listings to particular users, we used a NER-based approach (with spacy and skillNER). We first extracted relevant information (using a pre-trained SVM and n-gram scoring), like the skills, and we attached those as “tags” to the listing. Then, we used a Firestore query to match this information (skills and location) to particular users (and recommend it to them).

The front end was built using Next.js and SCSS. We used Figma to draw up the designs for the pages and the logo.

😣 Challenges we ran into 😣
We faced a multitude of problems with the back end. We struggled with implementing a recommendation engine with good results. We tried to use an approach using an LSTM and word embeddings, but it did not end up with good recommendations, and we had to scrap it. We eventually decided to use named entity recognition to extract job skills, which was perfect for our use case. When integrating with our API, this approach also had a host of issues (weird dependencies and slow runtime).

We also struggled with Cloud Firestore, as none of us had used it before. We had to completely rewrite portions of our code multiple times due to bugs using it. Nevertheless, we feel that it was the right choice to use Firestore, as its syntax became very intuitive after a few hours of using it.

For the front end, it was a challenge to implement good design practices and nail all the transitions (specifically between sign-in and sign-up).

🎉 Accomplishments that we're proud of 🎉
The high speed and accuracy of our recommendation engine.
The seamless connection between our API and front end.
Picking up Firestore on the fly.
Writing only a little bit of spaghetti code :)
📚 What we learned 📚
In a short timeframe, we learned an unbelievable amount. On the back end side, we learned how to use Cloud Firestore and we learned how to integrate with a deployed NLP model. We also learned how to connect with the front end seamlessly.

In general, we all learned how to work productively as a team, utilizing Git, GitHub, and traditional skills like time management, to deliver (what we believe) a great end result!

⏭️ What's next for Handshake ⏭️
On the feature side, we hope to implement an even more accurate recommendation engine, by using Geoqueries instead of the address-like system we have now. We want to increase the speed of our engine as well.

We also hope to spread the word about our app and gain more users, as we truly believe that Handshake can have an indispensable impact on society.

✨ Extra Info ✨
Pitch Deck
Full Credit List
Full Feature List
MLH Video Submission
Full Unedited Video
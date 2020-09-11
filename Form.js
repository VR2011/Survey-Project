class Form {

    constructor() {
      this.name = createInput("First Name");
      this.email = createInput("Email");
      this.q1 = createInput("Yes/No");
      this.q2 = createInput("Yes/No");
      this.q3 = createInput("Number as USD");
      this.q4 = createInput("Number as Percentage");
      this.q5 = createInput("Yes/No");
      this.enter = createButton("Submit All Responses");
      this.index = null;
    }

    display(){
        if(surveyState === "start"){
            textSize(35);
            fill("black");
            text("Survey to Bring About Change", 150, 50);
            this.name.position(100, 100);
            this.name.size(200, 40);
            this.name.style('font-size', '20px');
            this.email.position(100, 150);
            this.email.size(300, 40);
            this.email.style('font-size', '20px');
            textSize(20);
            text("Q1. Should we have a free meal plan for needy students at school?", 25, 225);
            this.q1.position(100, 255);
            this.q1.size(200, 40);
            this.q1.style('font-size', '20px');
            text("Q2. Would you be willing to donate a small amount to an organization?", 25, 325);
            this.q2.position(100, 355);
            this.q2.size(200, 40);
            this.q2.style('font-size', '20px');
            text("Q3. How much are you willing to contribute?", 25, 425);
            this.q3.position(100, 455);
            this.q3.size(200, 40);
            this.q3.style('font-size', '20px');
            text("Q4. What percent of the world do you think lives in poverty?", 25, 525);
            this.q4.position(100, 555);
            this.q4.size(210, 40);
            this.q4.style('font-size', '20px');
            text("Q5. Do you think free education in developing countries wold be beneficial?", 25, 625);
            this.q5.position(100, 655);
            this.q5.size(200, 40);
            this.q5.style('font-size', '20px');
            this.enter.position(325, 800);
            this.enter.size(200, 50);
            this.enter.style("font-size", "20px");
            text("Link to database: https://survey-af129.firebaseio.com/", 175, 900);
            this.index = voterCount;
            this.enter.mousePressed(()=>{
                voterCount+=1;
                var voterIndex = "voters/voter" + this.index;
                database.ref(voterIndex).set({
                    Name: this.name.value(),
                    Email: this.email.value(),
                    All_Answers: [this.q1.value(), this.q2.value(), this.q3.value(), this.q4.value(), this.q5.value(),]
                }); 
                database.ref("voterCount").set({
                    voterCount
                });
                surveyState = "end";
            });
        } else if(surveyState === "end"){
            textSize(30);
            text("Thank you for taking our survey :)", 200, 1000);
        }
    }
}
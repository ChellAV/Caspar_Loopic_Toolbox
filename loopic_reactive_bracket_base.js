loopic.useOnUpdate("_t1score", (dynamicId, value, next) => {
   checkScores();
});
loopic.useOnUpdate("_t2score", (dynamicId, value, next) => {
   checkScores();
});

function checkScores() {
   if (parseInt(loopic.templateData["_t1score"]) > parseInt(loopic.templateData["_t2score"])) {
      setHomeTeamRed();
   } else {
      setAwayTeamRed();
   }
}

function setHomeTeamRed() {
   const homeBgEl = loopic.getElement("_homeTeamBg");
   homeBgEl.domNode.style.background = "red";
   const homeTextEl = loopic.getElement("_t1score");
   homeTextEl.domNode.style.color = "white";
   homeTextEl.domNode.innerHTML = parseInt(loopic.templateData["_t1score"])

   const awayBgEl = loopic.getElement("_awayTeamBg");
   awayBgEl.domNode.style.background = "silver";
   const awayTextEl = loopic.getElement("_t2score");
   awayTextEl.domNode.style.color = "black";
   awayTextEl.domNode.innerHTML = parseInt(loopic.templateData["_t2score"])
}

function setAwayTeamRed() {
   const homeBgEl = loopic.getElement("_homeTeamBg");
   homeBgEl.domNode.style.background = "silver";
   const homeTextEl = loopic.getElement("_t1score");
   homeTextEl.domNode.style.color = "black";
   homeTextEl.domNode.innerHTML = parseInt(loopic.templateData["_t1score"])

   const awayBgEl = loopic.getElement("_awayTeamBg");
   awayBgEl.domNode.style.background = "red";
   const awayTextEl = loopic.getElement("_t2score");
   awayTextEl.domNode.style.color = "white";
   awayTextEl.domNode.innerHTML = parseInt(loopic.templateData["_t2score"])
}
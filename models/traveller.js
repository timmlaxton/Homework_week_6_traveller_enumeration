const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
return this.journeys.map((journey) => {
  return journey.startLocation
})


}

Traveller.prototype.getJourneyEndLocations = function () {
return this.journeys.map((journey) => {
  return journey.endLocation
})

}

Traveller.prototype.getJourneysByTransport = function (transport) {
return this.journeys.filter((journey) => {
  return journey.transport === transport;
})
return result;
}

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
return this.journeys.filter(journey => journey.distance > minDistance)
};


Traveller.prototype.calculateTotalDistanceTravelled = function () {
return this.journeys.reduce((a, b) => a + b.distance, 0)
};






module.exports = Traveller;

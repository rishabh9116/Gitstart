import React from "react";
import { Button, Card } from "react-bootstrap";

const toursArr = [
  {
    id: 1,
    date: "JUL16",
    city: "DETROIT, MI",
    title: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: 2,
    date: "JUL19",
    city: "TORONTO,ON",
    title: "BUDWEISER STAGE",
  },
  {
    id: 3,
    date: "JUL 22",
    city: "BRISTOW, VA",
    title: "JIGGY LUBE LIVE",
  },
  {
    id: 4,
    date: "JUL 29",
    city: "PHOENIX, AZ",
    title: "AK-CHIN PAVILION",
  },
  {
    id: 5,
    date: "AUG 2",
    city: "LAS VEGAS, NV",
    title: "T-MOBILE ARENA",
  },
  {
    id: 6,
    date: "AUG 7",
    city: "CONCORD, CA",
    title: "CONCORD PAVILION",
  },
];
const Tours = () => {
  return (
    <div>
      <h2>Tours</h2>
      <Card>
        {toursArr.map((tour) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <span>{tour.date}</span>
              <span>{tour.city}</span>
              <span>{tour.title}</span>
              <Button >BUY TICKETS</Button>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default Tours;

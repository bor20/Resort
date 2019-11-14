import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Free cocktails available"
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info: "Free Hikings available"
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "Free Shuttle services available"
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info: "Free Beer available!"
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

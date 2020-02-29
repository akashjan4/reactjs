import * as React from "react";
import { ToDoList, IToDo } from "./todoList";

export class MainContent extends React.Component {
  render() {
    const title = "The Rapscallions";
    const content = `The Rapscallions, formed in 1980 by four Bowling Green State University
    (Ohio) students, won the 1984 international quartet championship in St.
    Louis, Missouri. The quartet placed in the top ten internationally each
    of the three years they competed: ninth place in 1982, sixth in 1983,
    and first in 1984. Tenor Dave Smotzer, lead David Wallace, baritone Tim
    Frye, and bass Jeff Oxley formed the quartet in 1980 while working
    summer jobs in Cedar Point, Ohio to earn money to return to the
    university. All were members of the A Cappella Choir and the Men's
    Chorus at the school and had other musical training. Oxley had sung lead
    roles in campus productions of Man of La Mancha and The Marriage of
    Figaro and was studying for an operatic career. Frye was a music
    education major and Smotzer was a music theatre major. David Wallace was
    a composition major and the first undergraduate director of an
    accredited university ensemble, "The Collegiates". Leaving school in
    1982, most of the foursome had moved on to their careers by the time
    they won the gold. Both Smotzer and Wallace were in business. Smotzer
    was directing Cincinnati's Southern Gateway Chorus, and Wallace was
    directing Sweet Adelines International's City of Flags Chorus in Canton,
    Ohio. Frye was a school teacher and a music director in Wayne County,
    Ohio, while Oxley was continuing his musical training. He would go on to
    become an accomplished music director and judge, winning two more gold
    medals with Acoustix in 1990 and with Max Q in 2007.`;

    const toDOItems:IToDo[] = [
      { item: "wake up", completed: true },
      { item: "get ready", completed: true },
      { item: "drive to office", completed: true },
      { item: "attend training", completed: false },
      { item: "exercise", completed: false },
      { item: "sleep", completed: true }
    ];
    return (
      <main>
        <h1>{title}</h1>
        {content}
        <div style={{ marginTop: 10 }}>
          <ToDoList list={toDOItems} />
        </div>
      </main>
    );
  }
}

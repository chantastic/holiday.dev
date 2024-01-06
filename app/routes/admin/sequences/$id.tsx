import { Link, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import React from "react";

export const loader: LoaderFunction = ({ params }) => {
  invariant(params.id, "expected params.id");
  return fetch(
    `https://api.convertkit.com/v3/sequences/${params.id}?api_key=${CONVERTKIT_API_KEY}`
  );
};

type Sequence = {
  id: number;
  name: string;
  hold: boolean;
  repeat: boolean;
  created_at: string;
};

// Object = $1

// created_at: "2020-01-15T23:03:09.000Z"

// email_templates: [Object, Object, Object, Object] (4)

// fri: true

// hold: false

// id: 530235

// mon: true

// name: "JS and React"

// recipient_rules: {}

// repeat: false

// sat: true

// send_time: 9

// send_time_zone: "Pacific Time (US & Canada)"

// send_time_zone_abbr: "PST"

// sun: true

// thr: true

// tue: true

// wed: true

export default function Index() {
  let sequence: Sequence = useLoaderData();
  console.log(Object.keys(sequence.recipient_rules));
  // course, recipient_rules = []
  // course
  //   0 "id"
  // 1 "name"
  // 2 "hold"
  // 3 "repeat"
  // 4 "created_at"
  // 5 "send_time"
  // 6 "send_time_zone"
  // 7 "recipient_rules"
  // 8 "mon"
  // 9 "tue"
  // 10 "wed"
  // 11 "thr"
  // 12 "fri"
  // 13 "sat"
  // 14 "sun"
  // 15 "send_time_zone_abbr"
  // 16 "email_templates"

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>
        <Link to="/admin">Admin</Link>: sequence
      </h1>
      <dl>
        {Object.entries(sequence?.course).map(([dt, dd]) => (
          <JSONTupleDD term={dt} definition={dd} key={dt} />
        ))}
      </dl>
    </div>
  );
}
// <li key="id">{sequence.course.id}</li>
// <li key="name">{sequence.course.name}</li>
// <li key="hold">{sequence.course.hold.toString()}</li>
// <li key="repeat">{sequence.course.repeat.toString()}</li>
// <li key="create_at">{sequence.course.created_at}</li>
// <li key="send_time">{sequence.course.send_time}</li>
// <li key="send_time_zone">{sequence.course.send_time_zone}</li>
// {/* <li key="recipient_rules">
//   {sequence.course.recipient_rules.join(", ")}
// </li> */}
// <li key="mon">{sequence.course.mon.toString()}</li>
// <li key="tue">{sequence.course.tue.toString()}</li>
// <li key="wed">{sequence.course.wed.toString()}</li>
// <li key="thr">{sequence.course.thr.toString()}</li>
// <li key="fri">{sequence.course.fri.toString()}</li>
// <li key="sat">{sequence.course.sat.toString()}</li>
// <li key="sun">{sequence.course.sun.toString()}</li>
// <li key="send_time_zone_abbr">{sequence.course.send_time_zone_abbr}</li>
// <li>
//   <ul>
//     {sequence.course.email_templates.map((emailTemplate) => (
//       <li key={emailTemplate.id}>{emailTemplate.subject}</li>
//     ))}
//   </ul>
// </li>

function JSONTupleDD({ term, definition, keyPrefix = "" }) {
  let key = `${keyPrefix ? `${keyPrefix}_` : ""}${term}`;
  if (typeof definition === "string") {
    return (
      <React.Fragment>
        <dt>{term}</dt>
        <dd>{definition}</dd>
      </React.Fragment>
    );
  }

  if (typeof definition === "boolean") {
    return (
      <React.Fragment>
        <dt>{term}</dt>
        <dd>{definition.toString()}</dd>
      </React.Fragment>
    );
  }

  if (Array.isArray(definition)) {
    return (
      <React.Fragment>
        <dt>{term}</dt>
        <dd>
          {definition.map((e) => (
            <ol>
              {Object.entries(e).map(([dt, dd]) => (
                <li key={`${term}_${dt}`}>
                  <JSONTupleDD
                    term={dt}
                    definition={dd}
                    // key={`${term}_${dt}`}
                  />
                </li>
              ))}
            </ol>
          ))}
        </dd>
      </React.Fragment>
    );
  }

  return null;
}

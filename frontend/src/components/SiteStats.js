import React, { useEffect, useState } from "react";
import Stat from "./Stat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function SiteStats() {
  const [answer, setAnswer] = useState(0);
  const [question, setQuestion] = useState(0);
  const [helpful, setHelpful] = useState(0);
  const [user, setUser] = useState(0);

  useEffect(() => {
    axios.get("/api/stats").then((response) => {
      console.log(response.data);
      setAnswer(response.data[0].answer_count.count);
      setHelpful(response.data[1].helpful_count.count);
      setQuestion(response.data[2].question_count.count);
      setUser(response.data[3].user_count.count);
    });
  }, []);
  return (
    <div className="site-stats">
      <div className="container">
        <Stat number={user || 0} title="MUTLU KULLANICI">
          <FontAwesomeIcon icon={faUser} />
        </Stat>
        <Stat number={question || 0} title="SORULAN SORU">
          <FontAwesomeIcon icon={faQuestion} />
        </Stat>
        <Stat number={answer || 0} title="VERİLEN CEVAP">
          <FontAwesomeIcon icon={faHandsHelping} />
        </Stat>
        <Stat number={helpful || 0} title="FAYDALI CEVAP">
          <FontAwesomeIcon icon={faTrophy} />
        </Stat>
      </div>
    </div>
  );
}

export default SiteStats;

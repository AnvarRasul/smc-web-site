import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.module.scss";

gsap.registerPlugin(ScrollTrigger);

const advantages = [
    {
        num: "01",
        title: "ВЫСОКАЯ ТОЧНОСТЬ"
    }
]
import { Pagination } from "reactstrap";
import { StyledExtra } from "../styles/StyledHeaderExtra";

export default function HeaderWords(props) {
    return (
        <StyledExtra>
         <main className="words">
                    <section className="word">
                        <div>{"<>"}H</div>
                        <div>e</div>
                        <div>l</div>
                        <div>l</div>
                        <div style={{ paddingRight: "1rem" }}>o,</div>
                        <div style={{ paddingRight: "1rem" }}>I</div>
                        <div>a</div>
                        <div style={{ paddingRight: "1rem" }}>m</div>
                        <div className="type">{"<"}J</div>
                        <div className="type">a</div>
                        <div className="type">c</div>
                        <div className="type">o</div>
                        <div className="type">b {"/>"}</div>
                    </section>
                    <section className="word" id="second">
                        <div style={{ paddingRight: ".5rem" }}>I</div>
                        <div>a</div>
                        <div style={{ paddingRight: ".5rem" }}>m</div>
                        <div style={{ paddingRight: ".5rem" }}>a</div>
                        <div>s</div>
                        <div>o</div>
                        <div>f</div>
                        <div>t</div>
                        <div>w</div>
                        <div>a</div>
                        <div>r</div>
                        <div style={{ paddingRight: ".5rem" }}>e</div>
                        <span id="relative">
                            <span id="span" style={{ display: "flex" }}>
                                <div id="one">d</div>
                                <div id="two">e</div>
                                <div id="three">v</div>
                                <div id="four">e</div>
                                <div id="five">l</div>
                                <div id="six">o</div>
                                <div id="seven">p</div>
                                <div id="eight">e</div>
                                <div id="nine">r {"</>"}</div>
                            </span>
                        </span>
                    </section>
                    </main>
    </StyledExtra>
    )
}
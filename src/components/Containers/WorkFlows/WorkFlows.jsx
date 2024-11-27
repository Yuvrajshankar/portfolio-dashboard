import React from 'react'
import style from "./WorkFlows.module.css";
import MainCon from '../../../skeletons/MainCon/MainCon';
import filter from "../../../assets/switch-vertical-02.svg";
import refresh from "../../../assets/refresh.svg";
import plus from "../../../assets/plus.svg";
import ItemContainer from '../../../skeletons/ItemContainer/ItemContainer';
import { workFlowList } from "../../../Data/WorkflowList";

function WorkFlows() {
    return (
        <MainCon>
            {/* Workflows  ---------  logos */}
            <header>
                <h3 className={style.workFlow}>Workflows</h3>
                <div className={style.buttons}>
                    <button className={style.sort}>
                        <img src={filter} alt="filter" />
                    </button>
                    <button>
                        <img src={refresh} alt="refresh" />
                    </button>
                    <button>
                        <img src={plus} alt="plus" />
                    </button>
                </div>
            </header>

            {/* searchbar */}
            <input type="text" placeholder="Search" className={style.workflow_search}></input>

            {/* WorkFlows items list */}

            {workFlowList.map(item => (
                <ItemContainer
                    key={item.id}
                    title={item.title}
                    des={item.des}
                    date={item.date}
                    ago={item.ago}
                    city={item.city}
                    containerColor={item.containerColor}
                    circleColor={item.circleColor}
                />
            ))}
        </MainCon>
    )
}

export default WorkFlows

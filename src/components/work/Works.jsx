import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { projectsData } from './Data';
import { projectsNavs } from './Data';
import WorksItems from './WorksItems';

const Works = () => {
    const [item, setItem] = useState({name: "all"});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    const handleClick = (e,idx)=>{
        setItem({name: e.target.textContent.toLowerCase()});
        setActive(idx);
    }

    useEffect(()=>{
        if(item.name === "all"){
            setProjects(projectsData);
        }
        else{
            const newProjects = projectsData.filter((project)=>{
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    },[item]);
  return (
    <>
        <div className="work__filters">
            {
                projectsNavs.map((item, idx)=>{
                    return <span onClick={(e)=> handleClick(e,idx)} className={`${active === idx ? "acitve-work":""} work__item`} key={idx}>
                        {
                            item.name
                        }
                    </span>
                })
            }
        </div>

        <div className="work__container container grid">
            {
                projects.map((item)=>{
                    return <WorksItems item={item} key={item.id}/>
                })
            }
            {
                projects.length === 0 && (
                    <p>No design made by me.</p>
                )
            }
        </div>
    </>
  )
}

export default Works
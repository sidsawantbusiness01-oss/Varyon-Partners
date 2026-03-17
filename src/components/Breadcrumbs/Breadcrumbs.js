"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumbs(){

  const path = usePathname().split("/").filter(Boolean);

  return(

    <div style={{marginBottom:"20px", marginLeft:"20px", color:"#94a3b8"}}>

      {path.map((item,i)=>(
        <span key={i}>
          {item} {i < path.length-1 && " / "}
        </span>
      ))}

    </div>

  );

}

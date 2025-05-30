import React, { useState,useEffect } from "react";
import TiffinLeftPanel from "../../components/TiffinComponets/TiffinLeftPanel";
import TiffinRightPanel from "../../components/TiffinComponets/TiffinRightPanle/TiffinRightPanel";
import TopBar from "../../components/TopBar";

export default function AddTiffin() {
    const initialComponent = localStorage.getItem("selectedComponent") || "Manage-Tiffin";
    const [selectedComponet, setSelectedComponet] = useState(initialComponent);

    // Save the selected component whenever it changes
    useEffect(() => {
        if (selectedComponet) {
            localStorage.setItem("selectedComponent", selectedComponet);
        }
    }, [selectedComponet]);

    return (
        <div className="flex flex-col h-screen overflow-y-hidden">
            <TopBar title="Tiffin Dashboard" />
            <div className="flex flex-1 overflow-y-hidden">
                <TiffinLeftPanel
                    onselectComponet={setSelectedComponet} 
                />
                <TiffinRightPanel
                    selectedComponet={selectedComponet}
                />
            </div>
        </div>
    );
}

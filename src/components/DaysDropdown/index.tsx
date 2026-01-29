import { useState } from "react";
import DropdownMenuOptions from "../DropdownMenuOptions";

export default function DaysDropdown() {
    const [selected, setSelected] = useState("Monday");

    const days = [
        "Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday", "Sunday"
    ];

    return (
        <div className="flex flex-col border border-neutral-600 bg-neutral-800 text-neutral-0 w-full max-w-[214px] font-dm-sans text-font-16 p-2 rounded-radius-12 shadow-xl">
            {days.map((day) => (
                <DropdownMenuOptions 
                    isFilterOption={false}
                    key={day} 
                    optionName={day} 
                    isSelected={selected === day}
                    onSelect={() => setSelected(day)}
                />
            ))}
        </div>
    );
}
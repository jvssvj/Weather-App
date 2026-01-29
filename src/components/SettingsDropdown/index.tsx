import { useState } from "react";
import DropdownMenuOptions from "../DropdownMenuOptions";

export default function SettingsDropdown() {
    const [tempSelected, setTempSelected] = useState('Fahrenheit (°F)')
    const [speedSelected, setSpeedSelected] = useState('mph')
    const [precipitationSelected, setPrecipitationSelected] = useState('Inches (in)')

    const temp = ['Celsius (°C)', 'Fahrenheit (°F)']
    const speed = ['km/h', 'mph']
    const precipitation = ['Millimeters (mm)', 'Inches (in)']

    return (
        <div className="flex items-start flex-col border border-neutral-600 bg-neutral-800 text-neutral-0 w-full max-w-[214px] font-dm-sans text-font-16 p-2 rounded-radius-12 shadow-xl">
            <button className="p-2 text-font-16 text-neutral cursor-pointer hover:bg-neutral-600 w-full text-start rounded-radius-8 transition duration-300">Switch to Imperial</button>
            
            <span className="inline-block text-neutral-300 p-2">Temperature</span>
            <nav className="w-full flex flex-col gap-1">
            {temp.map((temp) => (
                <DropdownMenuOptions 
                    isFilterOption={true}
                    key={temp} 
                    optionName={temp} 
                    isSelected={tempSelected === temp}
                    onSelect={() => setTempSelected(temp)}
                />
            ))}
            </nav>

            <hr className="h-0.5 border-neutral-600 w-full mt-1"/>

            <span className="inline-block text-neutral-300 p-2">Wind Speed</span>
            <nav className="w-full flex flex-col gap-1">
            {speed.map((speed) => (
                <DropdownMenuOptions 
                    isFilterOption={true}
                    key={speed} 
                    optionName={speed} 
                    isSelected={speedSelected === speed}
                    onSelect={() => setSpeedSelected(speed)}
                />
            ))}
            </nav>

            <hr className="h-0.5 border-neutral-600 w-full mt-1"/>

            <span className="inline-block text-neutral-300 p-2">Precipitation</span>
            <nav className="w-full flex flex-col gap-1">
            {precipitation.map((p) => (
                <DropdownMenuOptions 
                    isFilterOption={true}
                    key={p} 
                    optionName={p} 
                    isSelected={precipitationSelected === p}
                    onSelect={() => setPrecipitationSelected(p)}
                />
            ))}
            </nav>

        </div>
    );
}
interface OptionProps {
    optionName: string;
    isSelected: boolean;
    onSelect: () => void;
}

export default function Option({ optionName, isSelected, onSelect }: OptionProps) {
    return (
        <button
            onClick={onSelect}
            className={` cursor-pointer w-full text-left p-2 rounded-md transition-all duration-200
                ${isSelected 
                    ? "bg-neutral-600 text-neutral-0"
                    : "hover:bg-neutral-600/50 text-neutral-300"
                }
            `}
        >
            {optionName}
        </button>
    );
}
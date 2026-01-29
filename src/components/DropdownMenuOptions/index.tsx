interface DropdownMenuOptionsInterface {
    optionName: string;
    isSelected: boolean;
    isFilterOption: boolean;
    onSelect: () => void;
}

import iconCheckMark from '../../assets/images/icon-checkmark.svg'

export default function DropdownMenuOptions({ optionName, isSelected, isFilterOption, onSelect }: DropdownMenuOptionsInterface) {
    return (
        <button
            onClick={onSelect}
            className={`flex justify-between cursor-pointer w-full text-left p-2 rounded-radius-8 transition-all duration-300
                ${isSelected 
                    ? "bg-neutral-600 text-neutral-0"
                    : "hover:bg-neutral-600/50 text-neutral-300"
                }
            `}
        >
            {optionName}
            {(isFilterOption && isSelected) && (
                <img src={iconCheckMark} alt="" />
            )}
        </button>
    );
}
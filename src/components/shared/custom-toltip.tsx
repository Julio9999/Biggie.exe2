import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"


interface Props{
    children: React.ReactNode;
    text: string;
}


export const CustomToltip = ({children, text}: Props) => {
    return (
        <TooltipProvider delayDuration={200}>
            <Tooltip>
                <TooltipTrigger>
                    {children}
                </TooltipTrigger>
                <TooltipContent className="bg-mainColor rounded-md text-sm">
                    <p>{text}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}


const Circle = ({ total }) => {
    return (
        <div className="mr-8 mt-4 flex min-w-[100px] justify-center">
            <div className="shrink-1 z-base relative max-h-[100px] max-w-[100px]">
                <svg className="h-full w-full origin-center -rotate-90 transform" viewBox="0 0 100 100">
                    <circle fill="none" cx="50px" cy="50px" r="46" strokeWidth="3" strokeLinecap="round" stroke="currentColor" className="text-gray-4 dark:text-dark-gray-4 w-[100px]"></circle>
                    <circle fill="none" cx="50px" cy="50px" r="46" strokeWidth="5" strokeLinecap="round" stroke="currentColor" className="cursor-pointer text-brand-orange dark:text-dark-brand-orange drop-shadow-[0_2px_4px_rgba(255,161,22,0.2)]" strokeDasharray="27.268510621281433 261.7580135089795" strokeDashoffset="0" data-difficulty="ALL"></circle>
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
                    <div>
                        <div className="text-[24px] font-medium text-label-1 dark:text-dark-label-1">{total}</div>
                        <div className="whitespace-nowrap text-xs text-label-3 dark:text-dark-label-3">Solved</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Circle
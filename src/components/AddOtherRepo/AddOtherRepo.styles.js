import { useTailwind } from '../../hooks/useTailwind';

export const useStyles = () =>
  useTailwind({
    modalInner: `
        h-full flex flex-col
        relative
    `,

    container: `
        flex flex-row items-center justify-center
    `,

    button: `
        bg-gray-400 dark:bg-gray-800
        rounded-full p-3 px-5
        text-gray-800 dark:text-gray-400
        focus:text-purple-800 dark-focus:text-purple-300
        opacity-75
        focus:outline-none
        focus:bg-purple-300 dark-focus:bg-purple-800
    `,

    text: `
        text-sm leading-none font-semibold text-gray-800 dark:text-gray-400
    `,

    inputContainer: `
        bg-gray-200 block w-full rounded overflow-none
        flex flex-row
        mb-4
    `,

    iconContainer: `
        flex items-center justify-center p-2 pl-3
    `,

    icon: `
        opacity-50
    `,

    input: `
        p-2 pl-0 w-full bg-gray-200 rounded
        flex-1
        focus:outline-none
    `,

    emptyText: `
        text-gray-700 text-sm leading-none
    `,

    buttonContainer: `
        flex flex-row justify-end w-full
    `,

    saveButton: `
        p-2 px-3 bg-purple-600 leading-none rounded
        text-purple-100
        disabled:opacity-50 
    `,
  });

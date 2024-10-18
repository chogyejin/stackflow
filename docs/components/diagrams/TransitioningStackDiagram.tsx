import { type Lang, getLocaleBranch } from "../../utils/locale";

export const TransitioningStackDiagram = ({ lang = "en" }: { lang?: Lang }) => {
  const getLocaleText = getLocaleBranch(lang);
  return (
    <div className="w-full flex flex-col justify-center p-[2.5rem_0_1rem] max-w-[45rem] gap-2">
      <div className="w-full grid grid-cols-2 place-items-center">
        <span>
          {getLocaleText(
            "그림 1. 새 액티비티가 추가되는 모습",
            "Figure 1. How a new activity is added",
          )}
        </span>
        <span>
          {getLocaleText(
            "그림 2. 기존 액티비티가 제거되는 모습",
            "Figure 2. How an activity is removed",
          )}
        </span>
      </div>
      <svg
        width="100%"
        viewBox="0 0 778 318"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="15.5"
          y="204.5"
          width="181"
          height="47"
          rx="7.5"
          stroke="currentColor"
        />
        <rect
          x="15.5"
          y="78.5"
          width="181"
          height="47"
          rx="7.5"
          stroke="currentColor"
        />
        <rect
          x="15.5"
          y="140.5"
          width="181"
          height="47"
          rx="7.5"
          stroke="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M91 14C86.5817 14 83 17.5817 83 22V54C83 58.4183 86.5817 62 91 62H257C261.418 62 265 58.4183 265 54V22C265 17.5817 261.418 14 257 14H91ZM199.602 43H197.93V34.5156H199.602V43ZM198.773 33.2031C198.195 33.2109 197.719 32.7656 197.711 32.2188C197.719 31.6719 198.195 31.2344 198.773 31.2344C199.344 31.2344 199.82 31.6719 199.82 32.2188C199.82 32.7656 199.344 33.2109 198.773 33.2031ZM152.148 34.5156H150.414V32.4844H148.758V34.5156H147.508V35.8438H148.758V40.8438C148.742 42.3906 149.922 43.1094 151.227 43.1094C151.688 43.1094 152.047 43.0781 152.273 43.0469V41.5938C152.039 41.6172 151.672 41.6406 151.43 41.6406C150.891 41.6328 150.422 41.4609 150.414 40.5V35.8438H152.148V34.5156ZM137.289 40.875C136.914 42.25 135.609 43.1719 133.742 43.1719C131.242 43.1719 129.703 41.4453 129.711 38.8125C129.703 36.2031 131.266 34.4062 133.633 34.4062C135.562 34.4062 137.398 35.6016 137.398 38.6719V39.2656H131.367C131.414 40.8828 132.367 41.7969 133.758 41.7969C134.703 41.7969 135.32 41.3906 135.602 40.875H137.289ZM133.648 35.7812C132.312 35.7734 131.445 36.8203 131.375 38.0156H135.758C135.758 36.7266 134.922 35.7734 133.648 35.7812ZM142.695 35.8438C141.547 35.8438 140.727 36.6172 140.727 37.9688V43H139.055V34.5156H140.664V35.9062H140.758C141.156 34.9922 141.992 34.4062 143.258 34.4062C145 34.4062 146.156 35.5078 146.148 37.6094V43H144.492V37.8125C144.484 36.5781 143.82 35.8438 142.695 35.8438ZM160.883 40.875C160.508 42.25 159.203 43.1719 157.336 43.1719C154.836 43.1719 153.297 41.4453 153.305 38.8125C153.297 36.2031 154.859 34.4062 157.227 34.4062C159.156 34.4062 160.992 35.6016 160.992 38.6719V39.2656H154.961C155.008 40.8828 155.961 41.7969 157.352 41.7969C158.297 41.7969 158.914 41.3906 159.195 40.875H160.883ZM157.242 35.7812C155.906 35.7734 155.039 36.8203 154.969 38.0156H159.352C159.352 36.7266 158.516 35.7734 157.242 35.7812ZM162.648 43H164.32V37.8281C164.32 36.7188 165.18 35.9141 166.336 35.9219C166.68 35.9141 167.07 35.9844 167.211 36.0156V34.4219C167.039 34.4062 166.711 34.3828 166.508 34.3906C165.516 34.3828 164.664 34.9531 164.352 35.8594H164.258V34.5156H162.648V43ZM167.961 37.5H172.977V38.9375H167.961V37.5ZM174.602 40.6094C174.594 42.2656 175.852 43.1875 177.461 43.1875C178.867 43.1875 179.648 42.4766 179.977 41.8438H180.039V43H181.664V37.3594C181.656 34.8984 179.688 34.4062 178.336 34.4062C176.328 34.4062 175.016 35.4219 174.867 36.8281H176.523C176.695 36.2031 177.289 35.75 178.273 35.75C179.406 35.75 180 36.3047 179.992 37.2656L180 37.9453C179.609 37.9609 178.336 38.0312 177.773 38.0625C176.242 38.1719 174.594 38.6719 174.602 40.6094ZM176.227 40.625C176.227 39.7891 176.914 39.375 178.008 39.2969C178.224 39.2842 178.677 39.2532 179.109 39.2237L179.111 39.2236L179.111 39.2235C179.476 39.1986 179.825 39.1748 180 39.1641L180.008 39.9375C180.008 40.9453 179.195 41.8516 177.836 41.8594C176.898 41.8516 176.227 41.4375 176.227 40.625ZM190.758 40.3125C190.578 41.9609 189.273 43.1719 187.273 43.1719C184.797 43.1719 183.297 41.3516 183.305 38.7969C183.297 36.2109 184.852 34.4062 187.242 34.4062C189.18 34.4062 190.578 35.5469 190.758 37.2656H189.133C188.961 36.4688 188.328 35.8047 187.273 35.7969C185.898 35.8047 184.977 36.9453 184.977 38.75C184.977 40.6094 185.875 41.7578 187.273 41.75C188.219 41.7578 188.922 41.2266 189.133 40.3125H190.758ZM196.305 34.5156H194.57V32.4844H192.914V34.5156H191.664V35.8438H192.914V40.8438C192.898 42.3906 194.078 43.1094 195.383 43.1094C195.844 43.1094 196.203 43.0781 196.43 43.0469V41.5938C196.195 41.6172 195.828 41.6406 195.586 41.6406C195.047 41.6328 194.578 41.4609 194.57 40.5V35.8438H196.305V34.5156ZM208.914 34.5156H207.117L204.977 41.0312H204.898L202.758 34.5156H200.961L204.039 43H205.836L208.914 34.5156ZM217.18 40.875C216.805 42.25 215.5 43.1719 213.633 43.1719C211.133 43.1719 209.594 41.4453 209.602 38.8125C209.594 36.2031 211.156 34.4062 213.523 34.4062C215.453 34.4062 217.289 35.6016 217.289 38.6719V39.2656H211.258C211.305 40.8828 212.258 41.7969 213.648 41.7969C214.594 41.7969 215.211 41.3906 215.492 40.875H217.18ZM213.539 35.7812C212.203 35.7734 211.336 36.8203 211.266 38.0156H215.648C215.648 36.7266 214.812 35.7734 213.539 35.7812Z"
          fill="currentColor"
          className="text-primary"
        />
        <path
          d="M68.7969 107.172C70.6641 107.172 71.9688 106.25 72.3438 104.875H70.6562C70.375 105.391 69.7578 105.797 68.8125 105.797C67.4219 105.797 66.4688 104.883 66.4219 103.266H72.4531V102.672C72.4531 99.6016 70.6172 98.4062 68.6875 98.4062C66.3203 98.4062 64.7578 100.203 64.7656 102.812C64.7578 105.445 66.2969 107.172 68.7969 107.172ZM66.4297 102.016C66.5 100.82 67.3672 99.7734 68.7031 99.7812C69.9766 99.7734 70.8125 100.727 70.8125 102.016H66.4297ZM75.7812 101.969C75.7812 100.617 76.6016 99.8438 77.75 99.8438C78.875 99.8438 79.5391 100.578 79.5469 101.812V107H81.2031V101.609C81.2109 99.5078 80.0547 98.4062 78.3125 98.4062C77.0469 98.4062 76.2109 98.9922 75.8125 99.9062H75.7188V98.5156H74.1094V107H75.7812V101.969ZM87.2031 98.5156H85.4688V96.4844H83.8125V98.5156H82.5625V99.8438H83.8125V104.844C83.7969 106.391 84.9766 107.109 86.2812 107.109C86.7422 107.109 87.1016 107.078 87.3281 107.047V105.594C87.0938 105.617 86.7266 105.641 86.4844 105.641C85.9453 105.633 85.4766 105.461 85.4688 104.5V99.8438H87.2031V98.5156ZM92.3906 107.172C94.2578 107.172 95.5625 106.25 95.9375 104.875H94.25C93.9688 105.391 93.3516 105.797 92.4062 105.797C91.0156 105.797 90.0625 104.883 90.0156 103.266H96.0469V102.672C96.0469 99.6016 94.2109 98.4062 92.2812 98.4062C89.9141 98.4062 88.3516 100.203 88.3594 102.812C88.3516 105.445 89.8906 107.172 92.3906 107.172ZM90.0234 102.016C90.0938 100.82 90.9609 99.7734 92.2969 99.7812C93.5703 99.7734 94.4062 100.727 94.4062 102.016H90.0234ZM97.7031 107H99.375V101.828C99.375 100.719 100.234 99.9141 101.391 99.9219C101.734 99.9141 102.125 99.9844 102.266 100.016V98.4219C102.094 98.4062 101.766 98.3828 101.562 98.3906C100.57 98.3828 99.7188 98.9531 99.4062 99.8594H99.3125V98.5156H97.7031V107ZM108.031 101.5H103.016V102.938H108.031V101.5ZM113.219 107.172C114.766 107.164 115.375 106.227 115.688 105.672H115.812V107H117.438V95.6875H115.766V99.8906H115.688C115.383 99.3594 114.812 98.4062 113.234 98.4062C111.195 98.4062 109.672 100.016 109.672 102.781C109.672 105.516 111.172 107.164 113.219 107.172ZM111.375 102.75C111.367 101.078 112.117 99.8203 113.594 99.8281C115.031 99.8203 115.812 100.984 115.812 102.75C115.812 104.531 115.016 105.742 113.594 105.75C112.133 105.742 111.367 104.453 111.375 102.75ZM123.203 107.172C125.594 107.172 127.156 105.422 127.156 102.797C127.156 100.156 125.594 98.4062 123.203 98.4062C120.797 98.4062 119.227 100.156 119.234 102.797C119.227 105.422 120.797 107.172 123.203 107.172ZM120.906 102.797C120.906 101.172 121.648 99.7891 123.203 99.7812C124.734 99.7891 125.469 101.172 125.469 102.797C125.469 104.414 124.734 105.781 123.203 105.781C121.648 105.781 120.906 104.414 120.906 102.797ZM130.469 101.969C130.469 100.617 131.289 99.8438 132.438 99.8438C133.562 99.8438 134.227 100.578 134.234 101.812V107H135.891V101.609C135.898 99.5078 134.742 98.4062 133 98.4062C131.734 98.4062 130.898 98.9922 130.5 99.9062H130.406V98.5156H128.797V107H130.469V101.969ZM141.578 107.172C143.445 107.172 144.75 106.25 145.125 104.875H143.438C143.156 105.391 142.539 105.797 141.594 105.797C140.203 105.797 139.25 104.883 139.203 103.266H145.234V102.672C145.234 99.6016 143.398 98.4062 141.469 98.4062C139.102 98.4062 137.539 100.203 137.547 102.812C137.539 105.445 139.078 107.172 141.578 107.172ZM139.211 102.016C139.281 100.82 140.148 99.7734 141.484 99.7812C142.758 99.7734 143.594 100.727 143.594 102.016H139.211Z"
          fill="currentColor"
        />
        <path
          d="M68.7969 169.172C70.6641 169.172 71.9688 168.25 72.3438 166.875H70.6562C70.375 167.391 69.7578 167.797 68.8125 167.797C67.4219 167.797 66.4688 166.883 66.4219 165.266H72.4531V164.672C72.4531 161.602 70.6172 160.406 68.6875 160.406C66.3203 160.406 64.7578 162.203 64.7656 164.812C64.7578 167.445 66.2969 169.172 68.7969 169.172ZM66.4297 164.016C66.5 162.82 67.3672 161.773 68.7031 161.781C69.9766 161.773 70.8125 162.727 70.8125 164.016H66.4297ZM75.7812 163.969C75.7812 162.617 76.6016 161.844 77.75 161.844C78.875 161.844 79.5391 162.578 79.5469 163.812V169H81.2031V163.609C81.2109 161.508 80.0547 160.406 78.3125 160.406C77.0469 160.406 76.2109 160.992 75.8125 161.906H75.7188V160.516H74.1094V169H75.7812V163.969ZM87.2031 160.516H85.4688V158.484H83.8125V160.516H82.5625V161.844H83.8125V166.844C83.7969 168.391 84.9766 169.109 86.2812 169.109C86.7422 169.109 87.1016 169.078 87.3281 169.047V167.594C87.0938 167.617 86.7266 167.641 86.4844 167.641C85.9453 167.633 85.4766 167.461 85.4688 166.5V161.844H87.2031V160.516ZM92.3906 169.172C94.2578 169.172 95.5625 168.25 95.9375 166.875H94.25C93.9688 167.391 93.3516 167.797 92.4062 167.797C91.0156 167.797 90.0625 166.883 90.0156 165.266H96.0469V164.672C96.0469 161.602 94.2109 160.406 92.2812 160.406C89.9141 160.406 88.3516 162.203 88.3594 164.812C88.3516 167.445 89.8906 169.172 92.3906 169.172ZM90.0234 164.016C90.0938 162.82 90.9609 161.773 92.2969 161.781C93.5703 161.773 94.4062 162.727 94.4062 164.016H90.0234ZM97.7031 169H99.375V163.828C99.375 162.719 100.234 161.914 101.391 161.922C101.734 161.914 102.125 161.984 102.266 162.016V160.422C102.094 160.406 101.766 160.383 101.562 160.391C100.57 160.383 99.7188 160.953 99.4062 161.859H99.3125V160.516H97.7031V169ZM108.031 163.5H103.016V164.938H108.031V163.5ZM113.219 169.172C114.766 169.164 115.375 168.227 115.688 167.672H115.812V169H117.438V157.688H115.766V161.891H115.688C115.383 161.359 114.812 160.406 113.234 160.406C111.195 160.406 109.672 162.016 109.672 164.781C109.672 167.516 111.172 169.164 113.219 169.172ZM111.375 164.75C111.367 163.078 112.117 161.82 113.594 161.828C115.031 161.82 115.812 162.984 115.812 164.75C115.812 166.531 115.016 167.742 113.594 167.75C112.133 167.742 111.367 166.453 111.375 164.75ZM123.203 169.172C125.594 169.172 127.156 167.422 127.156 164.797C127.156 162.156 125.594 160.406 123.203 160.406C120.797 160.406 119.227 162.156 119.234 164.797C119.227 167.422 120.797 169.172 123.203 169.172ZM120.906 164.797C120.906 163.172 121.648 161.789 123.203 161.781C124.734 161.789 125.469 163.172 125.469 164.797C125.469 166.414 124.734 167.781 123.203 167.781C121.648 167.781 120.906 166.414 120.906 164.797ZM130.469 163.969C130.469 162.617 131.289 161.844 132.438 161.844C133.562 161.844 134.227 162.578 134.234 163.812V169H135.891V163.609C135.898 161.508 134.742 160.406 133 160.406C131.734 160.406 130.898 160.992 130.5 161.906H130.406V160.516H128.797V169H130.469V163.969ZM141.578 169.172C143.445 169.172 144.75 168.25 145.125 166.875H143.438C143.156 167.391 142.539 167.797 141.594 167.797C140.203 167.797 139.25 166.883 139.203 165.266H145.234V164.672C145.234 161.602 143.398 160.406 141.469 160.406C139.102 160.406 137.539 162.203 137.547 164.812C137.539 167.445 139.078 169.172 141.578 169.172ZM139.211 164.016C139.281 162.82 140.148 161.773 141.484 161.781C142.758 161.773 143.594 162.727 143.594 164.016H139.211Z"
          fill="currentColor"
        />
        <path
          d="M68.7969 233.172C70.6641 233.172 71.9688 232.25 72.3438 230.875H70.6562C70.375 231.391 69.7578 231.797 68.8125 231.797C67.4219 231.797 66.4688 230.883 66.4219 229.266H72.4531V228.672C72.4531 225.602 70.6172 224.406 68.6875 224.406C66.3203 224.406 64.7578 226.203 64.7656 228.812C64.7578 231.445 66.2969 233.172 68.7969 233.172ZM66.4297 228.016C66.5 226.82 67.3672 225.773 68.7031 225.781C69.9766 225.773 70.8125 226.727 70.8125 228.016H66.4297ZM75.7812 227.969C75.7812 226.617 76.6016 225.844 77.75 225.844C78.875 225.844 79.5391 226.578 79.5469 227.812V233H81.2031V227.609C81.2109 225.508 80.0547 224.406 78.3125 224.406C77.0469 224.406 76.2109 224.992 75.8125 225.906H75.7188V224.516H74.1094V233H75.7812V227.969ZM87.2031 224.516H85.4688V222.484H83.8125V224.516H82.5625V225.844H83.8125V230.844C83.7969 232.391 84.9766 233.109 86.2812 233.109C86.7422 233.109 87.1016 233.078 87.3281 233.047V231.594C87.0938 231.617 86.7266 231.641 86.4844 231.641C85.9453 231.633 85.4766 231.461 85.4688 230.5V225.844H87.2031V224.516ZM92.3906 233.172C94.2578 233.172 95.5625 232.25 95.9375 230.875H94.25C93.9688 231.391 93.3516 231.797 92.4062 231.797C91.0156 231.797 90.0625 230.883 90.0156 229.266H96.0469V228.672C96.0469 225.602 94.2109 224.406 92.2812 224.406C89.9141 224.406 88.3516 226.203 88.3594 228.812C88.3516 231.445 89.8906 233.172 92.3906 233.172ZM90.0234 228.016C90.0938 226.82 90.9609 225.773 92.2969 225.781C93.5703 225.773 94.4062 226.727 94.4062 228.016H90.0234ZM97.7031 233H99.375V227.828C99.375 226.719 100.234 225.914 101.391 225.922C101.734 225.914 102.125 225.984 102.266 226.016V224.422C102.094 224.406 101.766 224.383 101.562 224.391C100.57 224.383 99.7188 224.953 99.4062 225.859H99.3125V224.516H97.7031V233ZM108.031 227.5H103.016V228.938H108.031V227.5ZM113.219 233.172C114.766 233.164 115.375 232.227 115.688 231.672H115.812V233H117.438V221.688H115.766V225.891H115.688C115.383 225.359 114.812 224.406 113.234 224.406C111.195 224.406 109.672 226.016 109.672 228.781C109.672 231.516 111.172 233.164 113.219 233.172ZM111.375 228.75C111.367 227.078 112.117 225.82 113.594 225.828C115.031 225.82 115.812 226.984 115.812 228.75C115.812 230.531 115.016 231.742 113.594 231.75C112.133 231.742 111.367 230.453 111.375 228.75ZM123.203 233.172C125.594 233.172 127.156 231.422 127.156 228.797C127.156 226.156 125.594 224.406 123.203 224.406C120.797 224.406 119.227 226.156 119.234 228.797C119.227 231.422 120.797 233.172 123.203 233.172ZM120.906 228.797C120.906 227.172 121.648 225.789 123.203 225.781C124.734 225.789 125.469 227.172 125.469 228.797C125.469 230.414 124.734 231.781 123.203 231.781C121.648 231.781 120.906 230.414 120.906 228.797ZM130.469 227.969C130.469 226.617 131.289 225.844 132.438 225.844C133.562 225.844 134.227 226.578 134.234 227.812V233H135.891V227.609C135.898 225.508 134.742 224.406 133 224.406C131.734 224.406 130.898 224.992 130.5 225.906H130.406V224.516H128.797V233H130.469V227.969ZM141.578 233.172C143.445 233.172 144.75 232.25 145.125 230.875H143.438C143.156 231.391 142.539 231.797 141.594 231.797C140.203 231.797 139.25 230.883 139.203 229.266H145.234V228.672C145.234 225.602 143.398 224.406 141.469 224.406C139.102 224.406 137.539 226.203 137.547 228.812C137.539 231.445 139.078 233.172 141.578 233.172ZM139.211 228.016C139.281 226.82 140.148 225.773 141.484 225.781C142.758 225.773 143.594 226.727 143.594 228.016H139.211Z"
          fill="currentColor"
        />
        <circle
          cx="351.5"
          cy="38"
          r="4"
          transform="rotate(-180 351.5 38)"
          stroke="currentColor"
          className="text-primary"
        />
        <path
          d="M264.646 37.6464C264.451 37.8417 264.451 38.1583 264.646 38.3535L267.828 41.5355C268.024 41.7308 268.34 41.7308 268.536 41.5355C268.731 41.3403 268.731 41.0237 268.536 40.8284L265.707 38L268.536 35.1716C268.731 34.9763 268.731 34.6597 268.536 34.4645C268.34 34.2692 268.024 34.2692 267.828 34.4645L264.646 37.6464ZM348.5 37.5L265 37.5L265 38.5L348.5 38.5L348.5 37.5Z"
          fill="currentColor"
          className="text-primary"
        />
        <rect
          x="416.5"
          y="204.5"
          width="181"
          height="47"
          rx="7.5"
          stroke="currentColor"
        />
        <rect
          x="416.5"
          y="140.5"
          width="181"
          height="47"
          rx="7.5"
          stroke="currentColor"
        />
        <path
          d="M469.797 169.172C471.664 169.172 472.969 168.25 473.344 166.875H471.656C471.375 167.391 470.758 167.797 469.812 167.797C468.422 167.797 467.469 166.883 467.422 165.266H473.453V164.672C473.453 161.602 471.617 160.406 469.688 160.406C467.32 160.406 465.758 162.203 465.766 164.812C465.758 167.445 467.297 169.172 469.797 169.172ZM467.43 164.016C467.5 162.82 468.367 161.773 469.703 161.781C470.977 161.773 471.812 162.727 471.812 164.016H467.43ZM476.781 163.969C476.781 162.617 477.602 161.844 478.75 161.844C479.875 161.844 480.539 162.578 480.547 163.812V169H482.203V163.609C482.211 161.508 481.055 160.406 479.312 160.406C478.047 160.406 477.211 160.992 476.812 161.906H476.719V160.516H475.109V169H476.781V163.969ZM488.203 160.516H486.469V158.484H484.812V160.516H483.562V161.844H484.812V166.844C484.797 168.391 485.977 169.109 487.281 169.109C487.742 169.109 488.102 169.078 488.328 169.047V167.594C488.094 167.617 487.727 167.641 487.484 167.641C486.945 167.633 486.477 167.461 486.469 166.5V161.844H488.203V160.516ZM493.391 169.172C495.258 169.172 496.562 168.25 496.938 166.875H495.25C494.969 167.391 494.352 167.797 493.406 167.797C492.016 167.797 491.062 166.883 491.016 165.266H497.047V164.672C497.047 161.602 495.211 160.406 493.281 160.406C490.914 160.406 489.352 162.203 489.359 164.812C489.352 167.445 490.891 169.172 493.391 169.172ZM491.023 164.016C491.094 162.82 491.961 161.773 493.297 161.781C494.57 161.773 495.406 162.727 495.406 164.016H491.023ZM498.703 169H500.375V163.828C500.375 162.719 501.234 161.914 502.391 161.922C502.734 161.914 503.125 161.984 503.266 162.016V160.422C503.094 160.406 502.766 160.383 502.562 160.391C501.57 160.383 500.719 160.953 500.406 161.859H500.312V160.516H498.703V169ZM509.031 163.5H504.016V164.938H509.031V163.5ZM514.219 169.172C515.766 169.164 516.375 168.227 516.688 167.672H516.812V169H518.438V157.688H516.766V161.891H516.688C516.383 161.359 515.812 160.406 514.234 160.406C512.195 160.406 510.672 162.016 510.672 164.781C510.672 167.516 512.172 169.164 514.219 169.172ZM512.375 164.75C512.367 163.078 513.117 161.82 514.594 161.828C516.031 161.82 516.812 162.984 516.812 164.75C516.812 166.531 516.016 167.742 514.594 167.75C513.133 167.742 512.367 166.453 512.375 164.75ZM524.203 169.172C526.594 169.172 528.156 167.422 528.156 164.797C528.156 162.156 526.594 160.406 524.203 160.406C521.797 160.406 520.227 162.156 520.234 164.797C520.227 167.422 521.797 169.172 524.203 169.172ZM521.906 164.797C521.906 163.172 522.648 161.789 524.203 161.781C525.734 161.789 526.469 163.172 526.469 164.797C526.469 166.414 525.734 167.781 524.203 167.781C522.648 167.781 521.906 166.414 521.906 164.797ZM531.469 163.969C531.469 162.617 532.289 161.844 533.438 161.844C534.562 161.844 535.227 162.578 535.234 163.812V169H536.891V163.609C536.898 161.508 535.742 160.406 534 160.406C532.734 160.406 531.898 160.992 531.5 161.906H531.406V160.516H529.797V169H531.469V163.969ZM542.578 169.172C544.445 169.172 545.75 168.25 546.125 166.875H544.438C544.156 167.391 543.539 167.797 542.594 167.797C541.203 167.797 540.25 166.883 540.203 165.266H546.234V164.672C546.234 161.602 544.398 160.406 542.469 160.406C540.102 160.406 538.539 162.203 538.547 164.812C538.539 167.445 540.078 169.172 542.578 169.172ZM540.211 164.016C540.281 162.82 541.148 161.773 542.484 161.781C543.758 161.773 544.594 162.727 544.594 164.016H540.211Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M501 76C496.582 76 493 79.5817 493 84V116C493 120.418 496.582 124 501 124H667C671.418 124 675 120.418 675 116V84C675 79.5817 671.418 76 667 76H501ZM564.289 105H562.617V96.5156H564.289V105ZM563.461 95.2031C562.883 95.2109 562.406 94.7656 562.398 94.2188C562.406 93.6719 562.883 93.2344 563.461 93.2344C564.031 93.2344 564.508 93.6719 564.508 94.2188C564.508 94.7656 564.031 95.2109 563.461 95.2031ZM549.102 105.172C550.969 105.172 552.273 104.25 552.648 102.875H550.961C550.68 103.391 550.063 103.797 549.117 103.797C547.727 103.797 546.773 102.883 546.727 101.266H552.758V100.672C552.758 97.6016 550.922 96.4062 548.992 96.4062C546.625 96.4062 545.063 98.2031 545.07 100.812C545.063 103.445 546.602 105.172 549.102 105.172ZM546.734 100.016C546.805 98.8203 547.672 97.7734 549.008 97.7812C550.281 97.7734 551.117 98.7266 551.117 100.016H546.734ZM555.539 96.5156H553.695L556.305 100.75L553.68 105H555.508L557.398 101.828L559.305 105H561.117L558.461 100.75L561.102 96.5156H559.273L557.398 99.8125L555.539 96.5156ZM570.289 96.5156H568.555V94.4844H566.898V96.5156H565.648V97.8438H566.898V102.844C566.883 104.391 568.063 105.109 569.367 105.109C569.828 105.109 570.188 105.078 570.414 105.047V103.594C570.18 103.617 569.813 103.641 569.57 103.641C569.031 103.633 568.563 103.461 568.555 102.5V97.8438H570.289V96.5156ZM571.602 99.5H576.617V100.938H571.602V99.5ZM578.242 102.609C578.234 104.266 579.492 105.188 581.102 105.188C582.508 105.188 583.289 104.477 583.617 103.844H583.68V105H585.305V99.3594C585.297 96.8984 583.328 96.4062 581.977 96.4062C579.969 96.4062 578.656 97.4219 578.508 98.8281H580.164C580.336 98.2031 580.93 97.75 581.914 97.75C583.047 97.75 583.641 98.3047 583.633 99.2656L583.641 99.9453C583.25 99.9609 581.977 100.031 581.414 100.062C579.883 100.172 578.234 100.672 578.242 102.609ZM579.867 102.625C579.867 101.789 580.555 101.375 581.648 101.297C581.864 101.284 582.318 101.253 582.75 101.224L582.751 101.224L582.752 101.224C583.117 101.199 583.465 101.175 583.641 101.164L583.648 101.938C583.648 102.945 582.836 103.852 581.477 103.859C580.539 103.852 579.867 103.438 579.867 102.625ZM594.398 102.312C594.219 103.961 592.914 105.172 590.914 105.172C588.438 105.172 586.938 103.352 586.945 100.797C586.938 98.2109 588.492 96.4062 590.883 96.4062C592.82 96.4062 594.219 97.5469 594.398 99.2656H592.773C592.602 98.4688 591.969 97.8047 590.914 97.7969C589.539 97.8047 588.617 98.9453 588.617 100.75C588.617 102.609 589.516 103.758 590.914 103.75C591.859 103.758 592.563 103.227 592.773 102.312H594.398ZM599.945 96.5156H598.211V94.4844H596.555V96.5156H595.305V97.8438H596.555V102.844C596.539 104.391 597.719 105.109 599.023 105.109C599.484 105.109 599.844 105.078 600.07 105.047V103.594C599.836 103.617 599.469 103.641 599.227 103.641C598.688 103.633 598.219 103.461 598.211 102.5V97.8438H599.945V96.5156ZM603.242 105H601.57V96.5156H603.242V105ZM602.414 95.2031C601.836 95.2109 601.359 94.7656 601.352 94.2188C601.359 93.6719 601.836 93.2344 602.414 93.2344C602.984 93.2344 603.461 93.6719 603.461 94.2188C603.461 94.7656 602.984 95.2109 602.414 95.2031ZM612.555 96.5156H610.758L608.617 103.031H608.539L606.398 96.5156H604.602L607.68 105H609.477L612.555 96.5156ZM620.82 102.875C620.445 104.25 619.141 105.172 617.273 105.172C614.773 105.172 613.234 103.445 613.242 100.812C613.234 98.2031 614.797 96.4062 617.164 96.4062C619.094 96.4062 620.93 97.6016 620.93 100.672V101.266H614.898C614.945 102.883 615.898 103.797 617.289 103.797C618.234 103.797 618.852 103.391 619.133 102.875H620.82ZM617.18 97.7812C615.844 97.7734 614.977 98.8203 614.906 100.016H619.289C619.289 98.7266 618.453 97.7734 617.18 97.7812Z"
          fill="currentColor"
          className="text-primary"
        />
        <path
          d="M469.797 233.172C471.664 233.172 472.969 232.25 473.344 230.875H471.656C471.375 231.391 470.758 231.797 469.812 231.797C468.422 231.797 467.469 230.883 467.422 229.266H473.453V228.672C473.453 225.602 471.617 224.406 469.688 224.406C467.32 224.406 465.758 226.203 465.766 228.812C465.758 231.445 467.297 233.172 469.797 233.172ZM467.43 228.016C467.5 226.82 468.367 225.773 469.703 225.781C470.977 225.773 471.812 226.727 471.812 228.016H467.43ZM476.781 227.969C476.781 226.617 477.602 225.844 478.75 225.844C479.875 225.844 480.539 226.578 480.547 227.812V233H482.203V227.609C482.211 225.508 481.055 224.406 479.312 224.406C478.047 224.406 477.211 224.992 476.812 225.906H476.719V224.516H475.109V233H476.781V227.969ZM488.203 224.516H486.469V222.484H484.812V224.516H483.562V225.844H484.812V230.844C484.797 232.391 485.977 233.109 487.281 233.109C487.742 233.109 488.102 233.078 488.328 233.047V231.594C488.094 231.617 487.727 231.641 487.484 231.641C486.945 231.633 486.477 231.461 486.469 230.5V225.844H488.203V224.516ZM493.391 233.172C495.258 233.172 496.562 232.25 496.938 230.875H495.25C494.969 231.391 494.352 231.797 493.406 231.797C492.016 231.797 491.062 230.883 491.016 229.266H497.047V228.672C497.047 225.602 495.211 224.406 493.281 224.406C490.914 224.406 489.352 226.203 489.359 228.812C489.352 231.445 490.891 233.172 493.391 233.172ZM491.023 228.016C491.094 226.82 491.961 225.773 493.297 225.781C494.57 225.773 495.406 226.727 495.406 228.016H491.023ZM498.703 233H500.375V227.828C500.375 226.719 501.234 225.914 502.391 225.922C502.734 225.914 503.125 225.984 503.266 226.016V224.422C503.094 224.406 502.766 224.383 502.562 224.391C501.57 224.383 500.719 224.953 500.406 225.859H500.312V224.516H498.703V233ZM509.031 227.5H504.016V228.938H509.031V227.5ZM514.219 233.172C515.766 233.164 516.375 232.227 516.688 231.672H516.812V233H518.438V221.688H516.766V225.891H516.688C516.383 225.359 515.812 224.406 514.234 224.406C512.195 224.406 510.672 226.016 510.672 228.781C510.672 231.516 512.172 233.164 514.219 233.172ZM512.375 228.75C512.367 227.078 513.117 225.82 514.594 225.828C516.031 225.82 516.812 226.984 516.812 228.75C516.812 230.531 516.016 231.742 514.594 231.75C513.133 231.742 512.367 230.453 512.375 228.75ZM524.203 233.172C526.594 233.172 528.156 231.422 528.156 228.797C528.156 226.156 526.594 224.406 524.203 224.406C521.797 224.406 520.227 226.156 520.234 228.797C520.227 231.422 521.797 233.172 524.203 233.172ZM521.906 228.797C521.906 227.172 522.648 225.789 524.203 225.781C525.734 225.789 526.469 227.172 526.469 228.797C526.469 230.414 525.734 231.781 524.203 231.781C522.648 231.781 521.906 230.414 521.906 228.797ZM531.469 227.969C531.469 226.617 532.289 225.844 533.438 225.844C534.562 225.844 535.227 226.578 535.234 227.812V233H536.891V227.609C536.898 225.508 535.742 224.406 534 224.406C532.734 224.406 531.898 224.992 531.5 225.906H531.406V224.516H529.797V233H531.469V227.969ZM542.578 233.172C544.445 233.172 545.75 232.25 546.125 230.875H544.438C544.156 231.391 543.539 231.797 542.594 231.797C541.203 231.797 540.25 230.883 540.203 229.266H546.234V228.672C546.234 225.602 544.398 224.406 542.469 224.406C540.102 224.406 538.539 226.203 538.547 228.812C538.539 231.445 540.078 233.172 542.578 233.172ZM540.211 228.016C540.281 226.82 541.148 225.773 542.484 225.781C543.758 225.773 544.594 226.727 544.594 228.016H540.211Z"
          fill="currentColor"
        />
        <circle
          cx="678"
          cy="100"
          r="4"
          stroke="currentColor"
          className="text-primary"
        />
        <path
          d="M764.854 100.354C765.049 100.158 765.049 99.8417 764.854 99.6464L761.672 96.4645C761.476 96.2692 761.16 96.2692 760.964 96.4645C760.769 96.6597 760.769 96.9763 760.964 97.1716L763.793 100L760.964 102.828C760.769 103.024 760.769 103.34 760.964 103.536C761.16 103.731 761.476 103.731 761.672 103.536L764.854 100.354ZM681 100.5L764.5 100.5V99.5L681 99.5V100.5Z"
          fill="currentColor"
          className="text-primary"
        />
        <rect
          opacity="0.2"
          x="493.5"
          y="14.5"
          width="181"
          height="47"
          rx="7.5"
          stroke="currentColor"
        />
        <path
          opacity="0.2"
          d="M553.156 43.1719C555.023 43.1719 556.328 42.25 556.703 40.875H555.016C554.734 41.3906 554.117 41.7969 553.172 41.7969C551.781 41.7969 550.828 40.8828 550.781 39.2656H556.812V38.6719C556.812 35.6016 554.977 34.4062 553.047 34.4062C550.68 34.4062 549.117 36.2031 549.125 38.8125C549.117 41.4453 550.656 43.1719 553.156 43.1719ZM550.789 38.0156C550.859 36.8203 551.727 35.7734 553.062 35.7812C554.336 35.7734 555.172 36.7266 555.172 38.0156H550.789ZM559.594 34.5156H557.75L560.359 38.75L557.734 43H559.562L561.453 39.8281L563.359 43H565.172L562.516 38.75L565.156 34.5156H563.328L561.453 37.8125L559.594 34.5156ZM566.672 43H568.344V34.5156H566.672V43ZM566.453 32.2188C566.461 32.7656 566.938 33.2109 567.516 33.2031C568.086 33.2109 568.562 32.7656 568.562 32.2188C568.562 31.6719 568.086 31.2344 567.516 31.2344C566.938 31.2344 566.461 31.6719 566.453 32.2188ZM574.344 34.5156H572.609V32.4844H570.953V34.5156H569.703V35.8438H570.953V40.8438C570.938 42.3906 572.117 43.1094 573.422 43.1094C573.883 43.1094 574.242 43.0781 574.469 43.0469V41.5938C574.234 41.6172 573.867 41.6406 573.625 41.6406C573.086 41.6328 572.617 41.4609 572.609 40.5V35.8438H574.344V34.5156ZM580.672 37.5H575.656V38.9375H580.672V37.5ZM585.859 43.1719C587.406 43.1641 588.016 42.2266 588.328 41.6719H588.453V43H590.078V31.6875H588.406V35.8906H588.328C588.023 35.3594 587.453 34.4062 585.875 34.4062C583.836 34.4062 582.312 36.0156 582.312 38.7812C582.312 41.5156 583.812 43.1641 585.859 43.1719ZM584.016 38.75C584.008 37.0781 584.758 35.8203 586.234 35.8281C587.672 35.8203 588.453 36.9844 588.453 38.75C588.453 40.5312 587.656 41.7422 586.234 41.75C584.773 41.7422 584.008 40.4531 584.016 38.75ZM595.844 43.1719C598.234 43.1719 599.797 41.4219 599.797 38.7969C599.797 36.1562 598.234 34.4062 595.844 34.4062C593.438 34.4062 591.867 36.1562 591.875 38.7969C591.867 41.4219 593.438 43.1719 595.844 43.1719ZM593.547 38.7969C593.547 37.1719 594.289 35.7891 595.844 35.7812C597.375 35.7891 598.109 37.1719 598.109 38.7969C598.109 40.4141 597.375 41.7812 595.844 41.7812C594.289 41.7812 593.547 40.4141 593.547 38.7969ZM603.109 37.9688C603.109 36.6172 603.93 35.8438 605.078 35.8438C606.203 35.8438 606.867 36.5781 606.875 37.8125V43H608.531V37.6094C608.539 35.5078 607.383 34.4062 605.641 34.4062C604.375 34.4062 603.539 34.9922 603.141 35.9062H603.047V34.5156H601.438V43H603.109V37.9688ZM614.219 43.1719C616.086 43.1719 617.391 42.25 617.766 40.875H616.078C615.797 41.3906 615.18 41.7969 614.234 41.7969C612.844 41.7969 611.891 40.8828 611.844 39.2656H617.875V38.6719C617.875 35.6016 616.039 34.4062 614.109 34.4062C611.742 34.4062 610.18 36.2031 610.188 38.8125C610.18 41.4453 611.719 43.1719 614.219 43.1719ZM611.852 38.0156C611.922 36.8203 612.789 35.7734 614.125 35.7812C615.398 35.7734 616.234 36.7266 616.234 38.0156H611.852Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

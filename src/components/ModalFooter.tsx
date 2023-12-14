import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const ModalFooter: React.FunctionComponent = () => {
  return (
    <div className="relative">
      <div className="border-grey flex flex-col text-center bg-black w-full sm:h-[335px] lg:h-[670px]">
        <div className="text-white h-1/2 flex bg-gray-900 items-center justify-evenly p-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="none"><path fill="#fff" d="M29.779 29.62c-3.381.986-7.45 2.587-8.64 6.28-.5 1.97.127 3.878 1.754 5.172 1.754 1.356 4.444 1.908 6.447.986 1.126-.555 2.252-1.539 2.63-2.956l-.063-.062c-1.315.862-3.255.8-4.507-.062-1.063-.8-1.69-1.97-1.627-3.264.189-2.526 2.88-4.372 5.195-5.049.75-.186 1.564-.369 2.44-.431-.5 2.526-2.566 4.803-4.882 6.22v.125c1.439.431 3.192.124 4.57-.186.376 1.663.94 3.633 1.877 5.48.94-1.909 1.502-3.941 1.94-5.48 1.378.37 3.13.676 4.57.186v-.124c-2.252-1.356-4.38-3.695-4.882-6.221.876.062 1.69.186 2.44.431 2.253.615 4.946 2.526 5.133 5.049.063 1.355-.502 2.463-1.628 3.264-1.252.862-3.192.924-4.507.062.439 1.415 1.502 2.401 2.63 2.956 1.94.925 4.696.432 6.447-.986 1.628-1.232 2.252-3.14 1.754-5.172-1.127-3.634-5.258-5.235-8.639-6.221 5.258-.431 10.14-1.847 14.022-5.48 2.88-2.957 4.696-7.143 3.006-11.207-1.063-2.833-3.882-4.62-6.822-4.803-4.318-.432-7.951 2.647-9.765 6.159-.313.738-.564 1.415-.75 2.34 2.503-2.217 5.32-4.066 8.887-3.265 1.628.37 3.192 1.663 3.568 3.326.75 3.019-.502 5.79-2.754 7.881-3.255 2.71-7.324 3.696-11.581 4.065.126-2.216.688-4.248 2.066-5.911 1.002-1.108 2.252-1.787 3.756-1.663 1.003.124 3.005 1.846.564 4.127l.126.123c2.192-.307 4.507-2.094 5.072-4.31.75-2.708-1.754-6.22-5.447-4.927-5.321 1.909-7.137 7.512-7.45 12.625 0 .124-.438.124-.564.062-1.252-5.79 1.753-10.592 2.942-15.765C40.171 8.005 37.417 3.941 34.85 0c-2.567 3.94-5.32 7.943-4.258 12.994 1.252 5.173 4.195 9.914 2.943 15.765-.063.124-.502.124-.565-.062-.312-5.11-2.191-10.654-7.45-12.625-3.692-1.293-6.134 2.216-5.383 4.928.625 2.215 2.88 4.002 5.072 4.31l.125-.124c-2.44-2.278-.438-4.003.565-4.127 1.501-.124 2.69.493 3.756 1.663 1.378 1.663 1.94 3.695 2.066 5.911-4.258-.37-8.326-1.356-11.581-4.065-2.253-2.094-3.505-4.927-2.754-7.88.438-1.664 1.94-2.958 3.567-3.327 3.505-.8 6.447 1.108 8.889 3.264-.19-.924-.439-1.6-.751-2.34-1.628-3.509-5.321-6.649-9.516-6.22-2.88.186-5.759 1.97-6.822 4.803-1.69 4.064.126 8.253 3.006 11.207 3.882 3.695 8.825 5.049 14.022 5.542M12.412 53.996c1.285-.323 2.192-1.289 2.192-2.727 0-1.66-1.31-2.874-3.376-2.874H7.701v9.64h2.142v-4.56l2.746 4.56 2.443-.024-2.62-4.015Zm-1.184-1.512H9.843v-2.33h1.385c.68 0 1.235.421 1.235 1.09 0 .769-.479 1.24-1.235 1.24ZM16.14 58.035v-9.64h5.72v1.784h-3.553v2.255h3.326v1.785h-3.326v2.032h3.78v1.785H16.14ZM23.572 58.035v-9.64h2.142v7.856h3.502v1.785h-5.644ZM35.59 48.395h-2.066l-3.502 9.64h2.268l.78-2.428h2.974l.755 2.428h2.368l-3.577-9.64Zm-1.94 5.402.73-2.33c.127-.346.202-.768.202-.768s.101.422.202.769l.73 2.33H33.65ZM42.517 48.37h-2.141v9.64h2.141v-9.64ZM47.078 58.158c-1.36 0-2.369-.495-3.3-1.214l1.108-1.487c.58.446 1.41.843 2.217.843.982 0 1.26-.322 1.26-.892 0-.967-1.79-1.29-2.62-1.735-.983-.546-1.764-1.14-1.764-2.677 0-1.983 1.763-2.8 3.477-2.8.906 0 2.04.247 2.846.842l-.957 1.586c-.428-.297-1.159-.545-1.864-.545-1.008 0-1.336.545-1.336.942 0 .867 1.26 1.14 2.394 1.61.957.422 1.99 1.066 1.99 2.652-.025 1.81-1.335 2.875-3.451 2.875M62.345 55.16l-1.184-1.314c-.278.372-.655.768-1.059 1.165l-1.813-2.23c.932-.546 1.763-1.19 1.763-2.28 0-1.364-1.285-2.306-2.67-2.306-1.386 0-2.62.868-2.62 2.23 0 .918.453 1.414 1.007 2.083-.982.62-1.89 1.437-1.89 2.726 0 1.735 1.74 2.924 3.452 2.924.907 0 1.739-.297 2.47-.718l.453.545h2.267l-1.335-1.611a10.02 10.02 0 0 0 1.159-1.214Zm-4.888-5.552c.454 0 .806.322.806.768s-.352.793-.907 1.14c-.327-.421-.68-.842-.68-1.14 0-.371.353-.768.781-.768Zm.151 6.84c-.806 0-1.637-.52-1.637-1.363 0-.57.353-.991.831-1.388l1.965 2.38c-.378.223-.78.371-1.159.371ZM15.637 64.251h-3.426v-4.015h-2.142v9.641h2.142v-3.866h3.426v3.866h2.141v-9.64h-2.141v4.014ZM5.182 68.141c-1.814 0-2.796-1.19-2.796-3.172 0-1.76 1.083-3.073 2.746-3.073.907 0 1.637.297 2.318.966l1.209-1.387c-1.008-1.017-2.091-1.438-3.527-1.438-2.746 0-4.963 2.032-4.963 4.932C.169 68.042 2.209 70 5.182 70c1.713 0 2.797-.594 3.704-1.561L7.65 67.05c-.63.57-1.234 1.09-2.469 1.09ZM37.203 66.06h3.3v-1.784h-3.3v-2.255h3.552v-1.785h-5.694v9.641h5.896v-1.784h-3.754V66.06ZM66.023 64.623l2.62-4.387H66.25l-1.411 2.528-1.486-2.528h-2.369l2.646 4.387-3.124 5.254h2.368l1.965-3.42 2.016 3.42h2.393l-3.225-5.254ZM57.76 65.936c0 1.289-.958 2.23-2.167 2.23-1.21 0-2.015-.916-2.015-2.23v-5.725H51.41v5.725c0 2.627 1.965 4.065 4.207 4.065s4.283-1.413 4.283-4.065v-5.725H57.76v5.725ZM27.88 61.995h1.94v7.857h2.142v-7.857h1.915v-1.784H27.88v1.784ZM22.49 60.236l-3.502 9.641h2.268l.78-2.428h2.973l.756 2.428h2.368l-3.577-9.64H22.49Zm.1 5.403.757-2.33c.1-.346.201-.768.201-.768s.101.422.202.769l.73 2.33h-1.89ZM45.44 60.236l-3.502 9.641h2.268l.78-2.428h2.974l.755 2.428h2.368l-3.577-9.64H45.44Zm.126 5.403.73-2.33c.102-.346.202-.768.202-.768s.101.422.202.769c0 0 .73 2.33.756 2.33h-1.89Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="none"><path fill="#fff" d="M24.7 18.241c-.14-.13-.31-.23-.48-.31-.47-.22-.97-.32-1.48-.4-.16-.02-.32-.03-.49-.05v-.26c0-.04.02-.05.05-.06l.33-.03c.4-.04.8-.12 1.18-.24.3-.09.57-.23.82-.42.29-.23.46-.53.46-.92-.01-.49-.23-.86-.6-1.15-.06-.05-.13-.08-.2-.11-.27-.1-.53-.07-.8.02-.29.11-.56.28-.79.5-.39.36-.71.79-1.01 1.23a.21.21 0 0 1-.04.06c-.05-.03-.09-.06-.13-.08l-.14-.08.03-.06c.26-.57.49-1.15.56-1.79.04-.28.02-.57-.04-.85-.09-.37-.29-.63-.64-.75a1.56 1.56 0 0 0-.64-.07c-.23.01-.45.09-.63.24s-.31.35-.37.58c-.1.36-.08.72-.02 1.07.08.41.19.8.35 1.17.07.15.13.3.2.46l-.26.15h-.01c-.01-.02-.02-.03-.03-.05-.33-.49-.68-.95-1.13-1.33-.21-.18-.45-.32-.71-.41-.21-.07-.42-.11-.63-.04-.49.14-.78.49-.9.99-.11.5.04.91.43 1.22.12.1.26.18.4.25.47.23.98.33 1.49.4.15.01.29.03.44.04.01 0 .04.02.04.03.01.1 0 .19 0 .29-.13.01-.26.03-.39.04-.4.04-.79.13-1.18.25-.29.09-.57.23-.82.42-.28.23-.45.53-.44.91 0 .48.22.85.59 1.14.07.05.14.09.22.12.29.11.57.07.86-.05.28-.12.54-.3.77-.53.37-.34.67-.74.95-1.16.02-.02.03-.04.04-.06.08.05.16.09.24.13.01.01.02.02.03.02v.01c-.01.02-.01.03-.02.05-.28.61-.51 1.23-.57 1.91-.03.25-.01.51.06.75.11.38.34.65.72.77.18.05.36.06.54.05.5-.04.84-.33 1-.81.11-.36.09-.73.03-1.1-.08-.38-.19-.75-.33-1.11a8.11 8.11 0 0 1-.22-.52l.26-.14c.06.09.12.18.18.26.29.4.6.78.97 1.1.19.16.39.29.61.38.28.11.56.17.84.05.2-.07.37-.19.5-.35.14-.16.24-.35.29-.56.13-.47.02-.88-.34-1.21Zm0 0c-.14-.13-.31-.23-.48-.31-.47-.22-.97-.32-1.48-.4-.16-.02-.32-.03-.49-.05v-.26c0-.04.02-.05.05-.06l.33-.03c.4-.04.8-.12 1.18-.24.3-.09.57-.23.82-.42.29-.23.46-.53.46-.92-.01-.49-.23-.86-.6-1.15-.06-.05-.13-.08-.2-.11-.27-.1-.53-.07-.8.02-.29.11-.56.28-.79.5-.39.36-.71.79-1.01 1.23a.21.21 0 0 1-.04.06c-.05-.03-.09-.06-.13-.08l-.14-.08.03-.06c.26-.57.49-1.15.56-1.79.04-.28.02-.57-.04-.85-.09-.37-.29-.63-.64-.75a1.56 1.56 0 0 0-.64-.07c-.23.01-.45.09-.63.24s-.31.35-.37.58c-.1.36-.08.72-.02 1.07.08.41.19.8.35 1.17.07.15.13.3.2.46l-.26.15h-.01c-.01-.02-.02-.03-.03-.05-.33-.49-.68-.95-1.13-1.33-.21-.18-.45-.32-.71-.41-.21-.07-.42-.11-.63-.04-.49.14-.78.49-.9.99-.11.5.04.91.43 1.22.12.1.26.18.4.25.47.23.98.33 1.49.4.15.01.29.03.44.04.01 0 .04.02.04.03.01.1 0 .19 0 .29-.13.01-.26.03-.39.04-.4.04-.79.13-1.18.25-.29.09-.57.23-.82.42-.28.23-.45.53-.44.91 0 .48.22.85.59 1.14.07.05.14.09.22.12.29.11.57.07.86-.05.28-.12.54-.3.77-.53.37-.34.67-.74.95-1.16.02-.02.03-.04.04-.06.08.05.16.09.24.13.01.01.02.02.03.02v.01c-.01.02-.01.03-.02.05-.28.61-.51 1.23-.57 1.91-.03.25-.01.51.06.75.11.38.34.65.72.77.18.05.36.06.54.05.5-.04.84-.33 1-.81.11-.36.09-.73.03-1.1-.08-.38-.19-.75-.33-1.11a8.11 8.11 0 0 1-.22-.52l.26-.14c.06.09.12.18.18.26.29.4.6.78.97 1.1.19.16.39.29.61.38.28.11.56.17.84.05.2-.07.37-.19.5-.35.14-.16.24-.35.29-.56.13-.47.02-.88-.34-1.21Zm0 0c-.14-.13-.31-.23-.48-.31-.47-.22-.97-.32-1.48-.4-.16-.02-.32-.03-.49-.05v-.26c0-.04.02-.05.05-.06l.33-.03c.4-.04.8-.12 1.18-.24.3-.09.57-.23.82-.42.29-.23.46-.53.46-.92-.01-.49-.23-.86-.6-1.15-.06-.05-.13-.08-.2-.11-.27-.1-.53-.07-.8.02-.29.11-.56.28-.79.5-.39.36-.71.79-1.01 1.23a.21.21 0 0 1-.04.06c-.05-.03-.09-.06-.13-.08l-.14-.08.03-.06c.26-.57.49-1.15.56-1.79.04-.28.02-.57-.04-.85-.09-.37-.29-.63-.64-.75a1.56 1.56 0 0 0-.64-.07c-.23.01-.45.09-.63.24s-.31.35-.37.58c-.1.36-.08.72-.02 1.07.08.41.19.8.35 1.17.07.15.13.3.2.46l-.26.15h-.01c-.01-.02-.02-.03-.03-.05-.33-.49-.68-.95-1.13-1.33-.21-.18-.45-.32-.71-.41-.21-.07-.42-.11-.63-.04-.49.14-.78.49-.9.99-.11.5.04.91.43 1.22.12.1.26.18.4.25.47.23.98.33 1.49.4.15.01.29.03.44.04.01 0 .04.02.04.03.01.1 0 .19 0 .29-.13.01-.26.03-.39.04-.4.04-.79.13-1.18.25-.29.09-.57.23-.82.42-.28.23-.45.53-.44.91 0 .48.22.85.59 1.14.07.05.14.09.22.12.29.11.57.07.86-.05.28-.12.54-.3.77-.53.37-.34.67-.74.95-1.16.02-.02.03-.04.04-.06.08.05.16.09.24.13.01.01.02.02.03.02v.01c-.01.02-.01.03-.02.05-.28.61-.51 1.23-.57 1.91-.03.25-.01.51.06.75.11.38.34.65.72.77.18.05.36.06.54.05.5-.04.84-.33 1-.81.11-.36.09-.73.03-1.1-.08-.38-.19-.75-.33-1.11a8.11 8.11 0 0 1-.22-.52l.26-.14c.06.09.12.18.18.26.29.4.6.78.97 1.1.19.16.39.29.61.38.28.11.56.17.84.05.2-.07.37-.19.5-.35.14-.16.24-.35.29-.56.13-.47.02-.88-.34-1.21Zm11.65 0c-.15-.13-.31-.23-.48-.31-.47-.22-.98-.32-1.49-.4-.16-.02-.32-.03-.48-.05v-.26c0-.02 0-.04.01-.04.01-.02.02-.02.04-.02l.32-.03c.4-.04.8-.12 1.18-.24.3-.09.58-.23.82-.42.15-.12.26-.25.34-.4.04-.08.07-.16.09-.24a1.36 1.36 0 0 0-.13-.93c-.06-.1-.12-.18-.19-.27-.07-.08-.15-.15-.24-.23-.07-.05-.14-.08-.21-.11-.26-.1-.53-.07-.79.02-.3.11-.57.28-.79.5-.4.36-.72.79-1.02 1.23l-.04.06a.913.913 0 0 0-.13-.08l-.13-.08c.01-.03.02-.04.03-.06.13-.28.25-.57.35-.87.1-.29.17-.6.2-.92.04-.28.03-.57-.04-.85-.04-.18-.11-.34-.22-.47a.846.846 0 0 0-.42-.28c-.21-.07-.42-.09-.64-.07-.23.01-.45.09-.63.24s-.31.35-.37.58c-.1.36-.08.72-.02 1.07.08.4.2.8.36 1.17.03.08.06.15.09.23.03.07.07.15.11.23h-.01l-.26.15h-.01c-.01-.02-.02-.03-.03-.05-.33-.49-.68-.95-1.13-1.33-.2-.18-.44-.32-.7-.41-.21-.07-.43-.11-.64-.04-.24.08-.44.2-.58.37-.15.17-.26.38-.31.63-.05.21-.05.4-.01.57.06.25.2.47.43.64.12.1.26.18.4.25.47.23.98.33 1.49.4.15.02.29.03.44.04.01 0 .04.02.04.03.01.1 0 .19 0 .29-.13.01-.26.03-.39.04-.4.05-.79.13-1.18.25-.29.09-.57.23-.82.42-.28.23-.44.53-.44.91 0 .48.22.85.58 1.14.07.05.15.09.23.12.29.11.57.07.85-.05.29-.12.55-.3.78-.52.37-.35.67-.75.95-1.17.02-.02.03-.03.04-.05l.24.12c.01.01.02.02.03.02v.02c-.01.01-.02.03-.02.04-.28.61-.51 1.23-.57 1.91-.03.25-.01.51.06.75.12.38.35.65.73.77.17.05.35.06.54.05.49-.04.84-.32.99-.81.12-.36.09-.73.03-1.09-.07-.39-.18-.76-.33-1.12-.07-.17-.14-.34-.22-.52.09-.05.18-.09.27-.14.06.09.12.18.18.26.29.4.59.78.97 1.1.18.16.39.29.61.38.27.11.56.17.84.05.19-.07.36-.19.5-.35.14-.16.24-.35.28-.56.13-.47.03-.88-.33-1.21Zm11.15-.3c-.47-.23-.98-.33-1.48-.4-.16-.03-.33-.04-.49-.06v-.26c0-.04.02-.05.05-.05.11-.01.22-.02.33-.04.4-.04.8-.12 1.18-.24.29-.08.57-.22.82-.41.29-.24.46-.54.46-.93-.01-.49-.23-.86-.6-1.15-.06-.04-.13-.08-.21-.11-.26-.1-.52-.07-.79.02-.29.11-.56.28-.79.5-.39.36-.71.79-1.01 1.23-.01.02-.03.04-.04.06l-.13-.08-.14-.08c.02-.02.02-.04.03-.06.27-.57.49-1.15.56-1.78.04-.29.02-.58-.04-.86-.09-.36-.29-.63-.64-.75-.21-.06-.43-.09-.64-.07-.23.01-.45.1-.63.24-.18.15-.31.36-.37.59-.1.35-.08.71-.02 1.07.08.4.19.79.35 1.16.07.16.13.31.2.46l-.26.16-.01-.01c-.01-.01-.02-.03-.03-.05-.33-.48-.68-.95-1.13-1.33-.21-.18-.45-.32-.71-.41-.21-.06-.42-.11-.63-.04-.49.15-.78.5-.9 1-.11.5.04.91.43 1.22.12.09.26.18.4.24.47.23.98.33 1.49.4.15.02.29.03.44.05.01 0 .04.01.04.02v.29c-.14.02-.26.03-.39.05-.4.04-.79.12-1.18.25-.29.08-.57.22-.82.42-.28.23-.44.52-.44.9 0 .49.22.86.58 1.14.07.06.15.09.23.12.29.11.57.07.85-.04.29-.13.55-.31.78-.53.37-.35.67-.75.95-1.17.01-.01.03-.03.04-.05l.24.13s.01.01.03.01v.02l-.02.04c-.28.61-.52 1.23-.58 1.91-.03.26 0 .51.07.75.11.38.34.65.72.77.18.05.36.07.54.05.5-.03.84-.32 1-.81.11-.36.08-.72.02-1.09-.07-.38-.18-.76-.33-1.12-.07-.17-.14-.34-.22-.52l.27-.14c.06.09.12.18.18.26.29.41.59.79.97 1.1.18.16.39.29.61.39.28.11.56.16.84.05a1.362 1.362 0 0 0 .79-.91c.12-.47.02-.88-.34-1.21-.14-.13-.31-.24-.48-.31Zm0 0c-.47-.23-.98-.33-1.48-.4-.16-.03-.33-.04-.49-.06v-.26c0-.04.02-.05.05-.05.11-.01.22-.02.33-.04.4-.04.8-.12 1.18-.24.29-.08.57-.22.82-.41.29-.24.46-.54.46-.93-.01-.49-.23-.86-.6-1.15-.06-.04-.13-.08-.21-.11-.26-.1-.52-.07-.79.02-.29.11-.56.28-.79.5-.39.36-.71.79-1.01 1.23-.01.02-.03.04-.04.06l-.13-.08-.14-.08c.02-.02.02-.04.03-.06.27-.57.49-1.15.56-1.78.04-.29.02-.58-.04-.86-.09-.36-.29-.63-.64-.75-.21-.06-.43-.09-.64-.07-.23.01-.45.1-.63.24-.18.15-.31.36-.37.59-.1.35-.08.71-.02 1.07.08.4.19.79.35 1.16.07.16.13.31.2.46l-.26.16-.01-.01c-.01-.01-.02-.03-.03-.05-.33-.48-.68-.95-1.13-1.33-.21-.18-.45-.32-.71-.41-.21-.06-.42-.11-.63-.04-.49.15-.78.5-.9 1-.11.5.04.91.43 1.22.12.09.26.18.4.24.47.23.98.33 1.49.4.15.02.29.03.44.05.01 0 .04.01.04.02v.29c-.14.02-.26.03-.39.05-.4.04-.79.12-1.18.25-.29.08-.57.22-.82.42-.28.23-.44.52-.44.9 0 .49.22.86.58 1.14.07.06.15.09.23.12.29.11.57.07.85-.04.29-.13.55-.31.78-.53.37-.35.67-.75.95-1.17.01-.01.03-.03.04-.05l.24.13s.01.01.03.01v.02l-.02.04c-.28.61-.52 1.23-.58 1.91-.03.26 0 .51.07.75.11.38.34.65.72.77.18.05.36.07.54.05.5-.03.84-.32 1-.81.11-.36.08-.72.02-1.09-.07-.38-.18-.76-.33-1.12-.07-.17-.14-.34-.22-.52l.27-.14c.06.09.12.18.18.26.29.41.59.79.97 1.1.18.16.39.29.61.39.28.11.56.16.84.05a1.362 1.362 0 0 0 .79-.91c.12-.47.02-.88-.34-1.21-.14-.13-.31-.24-.48-.31Zm-22.8.3c-.14-.13-.31-.23-.48-.31-.47-.22-.97-.32-1.48-.4-.16-.02-.32-.03-.49-.05v-.26c0-.04.02-.05.05-.06l.33-.03c.4-.04.8-.12 1.18-.24.3-.09.57-.23.82-.42.29-.23.46-.53.46-.92-.01-.49-.23-.86-.6-1.15-.06-.05-.13-.08-.2-.11-.27-.1-.53-.07-.8.02-.29.11-.56.28-.79.5-.39.36-.71.79-1.01 1.23a.21.21 0 0 1-.04.06c-.05-.03-.09-.06-.13-.08l-.14-.08.03-.06c.26-.57.49-1.15.56-1.79.04-.28.02-.57-.04-.85-.09-.37-.29-.63-.64-.75a1.56 1.56 0 0 0-.64-.07c-.23.01-.45.09-.63.24s-.31.35-.37.58c-.1.36-.08.72-.02 1.07.08.41.19.8.35 1.17.07.15.13.3.2.46l-.26.15h-.01c-.01-.02-.02-.03-.03-.05-.33-.49-.68-.95-1.13-1.33-.21-.18-.45-.32-.71-.41-.21-.07-.42-.11-.63-.04-.49.14-.78.49-.9.99-.11.5.04.91.43 1.22.12.1.26.18.4.25.47.23.98.33 1.49.4.15.01.29.03.44.04.01 0 .04.02.04.03.01.1 0 .19 0 .29-.13.01-.26.03-.39.04-.4.04-.79.13-1.18.25-.29.09-.57.23-.82.42-.28.23-.45.53-.44.91 0 .48.22.85.59 1.14.07.05.14.09.22.12.29.11.57.07.86-.05.28-.12.54-.3.77-.53.37-.34.67-.74.95-1.16.02-.02.03-.04.04-.06.08.05.16.09.24.13.01.01.02.02.03.02v.01c-.01.02-.01.03-.02.05-.28.61-.51 1.23-.57 1.91-.03.25-.01.51.06.75.11.38.34.65.72.77.18.05.36.06.54.05.5-.04.84-.33 1-.81.11-.36.09-.73.03-1.1-.08-.38-.19-.75-.33-1.11a8.11 8.11 0 0 1-.22-.52l.26-.14c.06.09.12.18.18.26.29.4.6.78.97 1.1.19.16.39.29.61.38.28.11.56.17.84.05.2-.07.37-.19.5-.35.14-.16.24-.35.29-.56.13-.47.02-.88-.34-1.21Zm11.65 0c-.15-.13-.31-.23-.48-.31-.47-.22-.98-.32-1.49-.4-.16-.02-.32-.03-.48-.05v-.26c0-.02 0-.04.01-.04.01-.02.02-.02.04-.02l.32-.03c.4-.04.8-.12 1.18-.24.3-.09.58-.23.82-.42.15-.12.26-.25.34-.4.04-.08.07-.16.09-.24a1.36 1.36 0 0 0-.13-.93c-.06-.1-.12-.18-.19-.27-.07-.08-.15-.15-.24-.23-.07-.05-.14-.08-.21-.11-.26-.1-.53-.07-.79.02-.3.11-.57.28-.79.5-.4.36-.72.79-1.02 1.23l-.04.06a.913.913 0 0 0-.13-.08l-.13-.08c.01-.03.02-.04.03-.06.13-.28.25-.57.35-.87.1-.29.17-.6.2-.92.04-.28.03-.57-.04-.85-.04-.18-.11-.34-.22-.47a.846.846 0 0 0-.42-.28c-.21-.07-.42-.09-.64-.07-.23.01-.45.09-.63.24s-.31.35-.37.58c-.1.36-.08.72-.02 1.07.08.4.19.8.35 1.17.03.08.07.15.1.23.03.07.07.15.1.23l-.26.15h-.01c-.01-.02-.02-.03-.03-.05-.33-.49-.68-.95-1.13-1.33-.2-.18-.44-.32-.7-.41-.21-.07-.43-.11-.64-.04-.24.08-.44.2-.58.37-.15.16-.26.38-.32.63-.05.2-.05.4 0 .57.06.25.2.47.43.64.12.1.26.18.4.25.47.23.98.33 1.49.4.15.02.29.03.44.04.01 0 .04.02.04.03.01.1 0 .19 0 .29-.13.01-.26.03-.39.04-.4.05-.79.13-1.18.25-.29.09-.57.23-.82.42-.28.23-.44.53-.44.91 0 .48.22.85.58 1.14.07.05.15.09.23.12.29.11.57.07.85-.05.29-.12.55-.3.78-.52.37-.35.67-.75.95-1.17.02-.02.03-.03.04-.05l.24.12c.01.01.02.02.03.02v.02c-.01.01-.02.03-.02.04-.28.61-.51 1.23-.57 1.91-.03.25-.01.51.06.75.12.38.35.65.73.77.17.05.35.06.54.05.49-.04.84-.32.99-.81.12-.36.09-.73.03-1.09-.07-.39-.18-.76-.33-1.12-.07-.17-.14-.34-.22-.52.09-.05.18-.09.27-.14.06.09.12.18.18.26.29.4.59.78.97 1.1.18.16.39.29.61.38.27.11.56.17.84.05.19-.07.36-.19.5-.35.14-.16.24-.35.28-.56.13-.47.03-.88-.33-1.21Zm11.15-.3c-.47-.23-.98-.33-1.48-.4-.16-.03-.33-.04-.49-.06v-.26c0-.04.02-.05.05-.05.11-.01.22-.02.33-.04.4-.04.8-.12 1.18-.24.29-.08.57-.22.82-.41.29-.24.46-.54.46-.93-.01-.49-.23-.86-.6-1.15-.06-.04-.13-.08-.21-.11-.26-.1-.52-.07-.79.02-.29.11-.56.28-.79.5-.39.36-.71.79-1.01 1.23-.01.02-.03.04-.04.06l-.13-.08-.14-.08c.02-.02.02-.04.03-.06.27-.57.49-1.15.56-1.78.04-.29.02-.58-.04-.86-.09-.36-.29-.63-.64-.75-.21-.06-.43-.09-.64-.07-.23.01-.45.1-.63.24-.18.15-.31.36-.37.59-.1.35-.08.71-.02 1.07.08.4.19.79.35 1.16.07.16.13.31.2.46l-.26.16-.01-.01c-.01-.01-.02-.03-.03-.05-.33-.48-.68-.95-1.13-1.33-.21-.18-.45-.32-.71-.41-.21-.06-.42-.11-.63-.04-.49.15-.78.5-.9 1-.11.5.04.91.43 1.22.12.09.26.18.4.24.47.23.98.33 1.49.4.15.02.29.03.44.05.01 0 .04.01.04.02v.29c-.14.02-.26.03-.39.05-.4.04-.79.12-1.18.25-.29.08-.57.22-.82.42-.28.23-.44.52-.44.9 0 .49.22.86.58 1.14.07.06.15.09.23.12.29.11.57.07.85-.04.29-.13.55-.31.78-.53.37-.35.67-.75.95-1.17.01-.01.03-.03.04-.05l.24.13s.01.01.03.01v.02l-.02.04c-.28.61-.52 1.23-.58 1.91-.03.26 0 .51.07.75.11.38.34.65.72.77.18.05.36.07.54.05.5-.03.84-.32 1-.81.11-.36.08-.72.02-1.09-.07-.38-.18-.76-.33-1.12-.07-.17-.14-.34-.22-.52l.27-.14c.06.09.12.18.18.26.29.41.59.79.97 1.1.18.16.39.29.61.39.28.11.56.16.84.05a1.362 1.362 0 0 0 .79-.91c.12-.47.02-.88-.34-1.21-.14-.13-.31-.24-.48-.31Zm-11.63-.01c-.47-.22-.98-.32-1.49-.4-.16-.02-.32-.03-.48-.05v-.26c0-.02 0-.04.01-.04.01-.02.02-.02.04-.02l.32-.03c.4-.04.8-.12 1.18-.24.3-.09.58-.23.82-.42.15-.12.26-.25.34-.4.04-.08.07-.16.09-.24a1.36 1.36 0 0 0-.13-.93c-.06-.1-.12-.18-.19-.27-.07-.08-.15-.15-.24-.23-.07-.05-.14-.08-.21-.11-.26-.1-.53-.07-.79.02-.3.11-.57.28-.79.5-.4.36-.72.79-1.02 1.23l-.04.06a.913.913 0 0 0-.13-.08l-.13-.08c.01-.03.02-.04.03-.06.13-.28.25-.57.35-.87.1-.29.17-.6.2-.92.04-.28.03-.57-.04-.85-.04-.18-.11-.34-.22-.47a.846.846 0 0 0-.42-.28c-.21-.07-.42-.09-.64-.07-.23.01-.45.09-.63.24s-.31.35-.37.58c-.1.36-.08.72-.02 1.07.08.4.19.8.35 1.17.03.08.07.15.1.23.03.07.07.15.1.23l-.26.15h-.01c-.01-.02-.02-.03-.03-.05-.33-.49-.68-.95-1.13-1.33-.2-.18-.44-.32-.7-.41-.21-.07-.43-.11-.64-.04-.24.08-.44.2-.58.37-.15.16-.26.38-.32.63-.05.2-.05.4 0 .57.06.25.2.47.43.64.12.1.26.18.4.25.47.23.98.33 1.49.4.15.02.29.03.44.04.01 0 .04.02.04.03.01.1 0 .19 0 .29-.13.01-.26.03-.39.04-.4.05-.79.13-1.18.25-.29.09-.57.23-.82.42-.28.23-.44.53-.44.91 0 .48.22.85.58 1.14.07.05.15.09.23.12.29.11.57.07.85-.05.29-.12.55-.3.78-.52.37-.35.67-.75.95-1.17.02-.02.03-.03.04-.05l.24.12c.01.01.02.02.03.02v.02c-.01.01-.02.03-.02.04-.28.61-.51 1.23-.57 1.91-.03.25-.01.51.06.75.12.38.35.65.73.77.17.05.35.06.54.05.49-.04.84-.32.99-.81.12-.36.09-.73.03-1.09-.07-.39-.18-.76-.33-1.12-.07-.17-.14-.34-.22-.52.09-.05.18-.09.27-.14.06.09.12.18.18.26.29.4.59.78.97 1.1.18.16.39.29.61.38.27.11.56.17.84.05.19-.07.36-.19.5-.35.14-.16.24-.35.28-.56.13-.47.03-.88-.33-1.21-.15-.13-.31-.23-.48-.31Zm-11.65 0c-.47-.22-.97-.32-1.48-.4-.16-.02-.32-.03-.49-.05v-.26c0-.04.02-.05.05-.06l.33-.03c.4-.04.8-.12 1.18-.24.3-.09.57-.23.82-.42.29-.23.46-.53.46-.92-.01-.49-.23-.86-.6-1.15-.06-.05-.13-.08-.2-.11-.27-.1-.53-.07-.8.02-.29.11-.56.28-.79.5-.39.36-.71.79-1.01 1.23a.21.21 0 0 1-.04.06c-.05-.03-.09-.06-.13-.08l-.14-.08.03-.06c.26-.57.49-1.15.56-1.79.04-.28.02-.57-.04-.85-.09-.37-.29-.63-.64-.75a1.56 1.56 0 0 0-.64-.07c-.23.01-.45.09-.63.24s-.31.35-.37.58c-.1.36-.08.72-.02 1.07.08.41.19.8.35 1.17.07.15.13.3.2.46l-.26.15h-.01c-.01-.02-.02-.03-.03-.05-.33-.49-.68-.95-1.13-1.33-.21-.18-.45-.32-.71-.41-.21-.07-.42-.11-.63-.04-.49.14-.78.49-.9.99-.11.5.04.91.43 1.22.12.1.26.18.4.25.47.23.98.33 1.49.4.15.01.29.03.44.04.01 0 .04.02.04.03.01.1 0 .19 0 .29-.13.01-.26.03-.39.04-.4.04-.79.13-1.18.25-.29.09-.57.23-.82.42-.28.23-.45.53-.44.91 0 .48.22.85.59 1.14.07.05.14.09.22.12.29.11.57.07.86-.05.28-.12.54-.3.77-.53.37-.34.67-.74.95-1.16.02-.02.03-.04.04-.06.08.05.16.09.24.13.01.01.02.02.03.02v.01c-.01.02-.01.03-.02.05-.28.61-.51 1.23-.57 1.91-.03.25-.01.51.06.75.11.38.34.65.72.77.18.05.36.06.54.05.5-.04.84-.33 1-.81.11-.36.09-.73.03-1.1-.08-.38-.19-.75-.33-1.11a8.11 8.11 0 0 1-.22-.52l.26-.14c.06.09.12.18.18.26.29.4.6.78.97 1.1.19.16.39.29.61.38.28.11.56.17.84.05.2-.07.37-.19.5-.35.14-.16.24-.35.29-.56.13-.47.02-.88-.34-1.21-.14-.13-.31-.23-.48-.31Zm12.13.31c-.15-.13-.31-.23-.48-.31-.47-.22-.98-.32-1.49-.4-.16-.02-.32-.03-.48-.05h-.01v-.26c0-.02.01-.04.02-.04.01-.02.02-.02.04-.02l.32-.03c.4-.04.8-.12 1.18-.24.3-.09.58-.23.82-.42.15-.12.26-.25.34-.4.04-.08.07-.16.09-.24a1.36 1.36 0 0 0-.13-.93c-.06-.1-.12-.18-.19-.27-.07-.08-.15-.15-.24-.23-.07-.05-.14-.08-.21-.11-.26-.1-.53-.07-.79.02-.3.11-.57.28-.79.5-.4.36-.72.79-1.02 1.23l-.04.06a.913.913 0 0 0-.13-.08l-.13-.08c.01-.03.01-.04.02-.06.14-.28.26-.57.36-.87.09-.29.16-.6.2-.92.04-.28.03-.57-.04-.85-.04-.18-.12-.34-.22-.47a.846.846 0 0 0-.42-.28c-.21-.07-.42-.09-.64-.07-.23.01-.45.09-.63.24s-.31.35-.37.58c-.1.36-.08.72-.02 1.07.08.4.19.8.35 1.17.03.08.07.15.1.23.03.07.07.15.1.23l-.26.15h-.01c-.01-.02-.02-.03-.03-.05-.33-.49-.68-.95-1.13-1.33-.2-.18-.44-.32-.7-.41-.21-.07-.43-.11-.64-.04-.24.08-.44.2-.58.37-.15.16-.26.38-.32.63-.05.2-.05.4 0 .57.06.25.2.47.43.64.12.1.26.18.4.25.47.23.98.33 1.49.4.15.02.29.03.44.04.01 0 .04.02.04.03.01.1 0 .19 0 .29-.13.01-.26.03-.39.04-.4.05-.79.13-1.18.25-.29.09-.57.23-.82.42-.28.23-.44.53-.44.91 0 .48.22.85.58 1.14.07.05.15.09.23.12.29.11.57.07.85-.05.29-.12.55-.3.78-.52.37-.35.67-.75.95-1.17.02-.02.03-.03.04-.05l.24.12c.01.01.02.02.03.02v.02c-.01.01-.02.03-.02.04-.28.61-.51 1.23-.57 1.91-.03.25-.01.51.06.75.12.38.35.65.73.77.17.05.35.06.54.05.49-.04.84-.32.99-.81.12-.36.09-.73.03-1.09-.07-.39-.18-.76-.33-1.12-.07-.17-.14-.34-.22-.52.09-.05.18-.09.27-.14.06.09.12.18.18.26.29.4.59.78.97 1.1.18.16.39.29.61.38.27.11.56.17.84.05.19-.07.36-.19.5-.35.14-.16.24-.35.28-.56.13-.47.03-.88-.33-1.21Zm-11.65 0c-.14-.13-.31-.23-.48-.31-.47-.22-.97-.32-1.48-.4-.16-.02-.32-.03-.49-.05v-.26c0-.04.02-.05.05-.06l.33-.03c.4-.04.8-.12 1.18-.24.3-.09.57-.23.82-.42.29-.23.46-.53.46-.92-.01-.49-.23-.86-.6-1.15-.06-.05-.13-.08-.2-.11-.27-.1-.53-.07-.8.02-.29.11-.56.28-.79.5-.39.36-.71.79-1.01 1.23a.21.21 0 0 1-.04.06c-.05-.03-.09-.06-.13-.08l-.14-.08.03-.06c.26-.57.49-1.15.56-1.79.04-.28.02-.57-.04-.85-.09-.37-.29-.63-.64-.75a1.56 1.56 0 0 0-.64-.07c-.23.01-.45.09-.63.24s-.31.35-.37.58c-.1.36-.08.72-.02 1.07.08.41.19.8.35 1.17.07.15.13.3.2.46l-.26.15h-.01c-.01-.02-.02-.03-.03-.05-.33-.49-.68-.95-1.13-1.33-.21-.18-.45-.32-.71-.41-.21-.07-.42-.11-.63-.04-.49.14-.78.49-.9.99-.11.5.04.91.43 1.22.12.1.26.18.4.25.47.23.98.33 1.49.4.15.01.29.03.44.04.01 0 .04.02.04.03.01.1 0 .19 0 .29-.13.01-.26.03-.39.04-.4.04-.79.13-1.18.25-.29.09-.57.23-.82.42-.28.23-.45.53-.44.91 0 .48.22.85.59 1.14.07.05.14.09.22.12.29.11.57.07.86-.05.28-.12.54-.3.77-.53.37-.34.67-.74.95-1.16.02-.02.03-.04.04-.06.08.05.16.09.24.13.01.01.02.02.03.02v.01c-.01.02-.01.03-.02.05-.28.61-.51 1.23-.57 1.91-.03.25-.01.51.06.75.11.38.34.65.72.77.18.05.36.06.54.05.5-.04.84-.33 1-.81.11-.36.09-.73.03-1.1-.08-.38-.19-.75-.33-1.11a8.11 8.11 0 0 1-.22-.52l.26-.14c.06.09.12.18.18.26.29.4.6.78.97 1.1.19.16.39.29.61.38.28.11.56.17.84.05.2-.07.37-.19.5-.35.14-.16.24-.35.29-.56.13-.47.02-.88-.34-1.21Zm11.65 0c-.15-.13-.31-.23-.48-.31-.47-.22-.98-.32-1.49-.4-.16-.02-.32-.03-.48-.05h-.01v-.26c0-.02.01-.04.02-.04.01-.02.02-.02.04-.02l.32-.03c.4-.04.8-.12 1.18-.24.3-.09.58-.23.82-.42.15-.12.26-.25.34-.4.04-.08.07-.16.09-.24a1.36 1.36 0 0 0-.13-.93c-.06-.1-.12-.18-.19-.27-.07-.08-.15-.15-.24-.23-.07-.05-.14-.08-.21-.11-.26-.1-.53-.07-.79.02-.3.11-.57.28-.79.5-.4.36-.72.79-1.02 1.23l-.04.06a.913.913 0 0 0-.13-.08l-.13-.08c.01-.03.01-.04.02-.06.14-.28.26-.57.36-.87.09-.29.16-.6.2-.92.04-.28.03-.57-.04-.85-.04-.18-.12-.34-.22-.47a.846.846 0 0 0-.42-.28c-.21-.07-.42-.09-.64-.07-.23.01-.45.09-.63.24s-.31.35-.37.58c-.1.36-.08.72-.02 1.07.08.4.19.8.35 1.17.03.08.07.15.1.23.03.07.07.15.1.23l-.26.15h-.01c-.01-.02-.02-.03-.03-.05-.33-.49-.68-.95-1.13-1.33-.2-.18-.44-.32-.7-.41-.21-.07-.43-.11-.64-.04-.24.08-.44.2-.58.37-.15.16-.26.38-.32.63-.05.2-.05.4 0 .57.06.25.2.47.43.64.12.1.26.18.4.25.47.23.98.33 1.49.4.15.02.29.03.44.04.01 0 .04.02.04.03.01.1 0 .19 0 .29-.13.01-.26.03-.39.04-.4.05-.79.13-1.18.25-.29.09-.57.23-.82.42-.28.23-.44.53-.44.91 0 .48.22.85.58 1.14.07.05.15.09.23.12.29.11.57.07.85-.05.29-.12.55-.3.78-.52.37-.35.67-.75.95-1.17.02-.02.03-.03.04-.05l.24.12c.01.01.02.02.03.02v.02c-.01.01-.02.03-.02.04-.28.61-.51 1.23-.57 1.91-.03.25-.01.51.06.75.12.38.35.65.73.77.17.05.35.06.54.05.49-.04.84-.32.99-.81.12-.36.09-.73.03-1.09-.07-.39-.18-.76-.33-1.12-.07-.17-.14-.34-.22-.52.09-.05.18-.09.27-.14.06.09.12.18.18.26.29.4.59.78.97 1.1.18.16.39.29.61.38.27.11.56.17.84.05.19-.07.36-.19.5-.35.14-.16.24-.35.28-.56.13-.47.03-.88-.33-1.21Zm-11.65 0c-.14-.13-.31-.23-.48-.31-.47-.22-.97-.32-1.48-.4-.16-.02-.32-.03-.49-.05v-.26c0-.04.02-.05.05-.06l.33-.03c.4-.04.8-.12 1.18-.24.3-.09.57-.23.82-.42.29-.23.46-.53.46-.92-.01-.49-.23-.86-.6-1.15-.06-.05-.13-.08-.2-.11-.27-.1-.53-.07-.8.02-.29.11-.56.28-.79.5-.39.36-.71.79-1.01 1.23a.21.21 0 0 1-.04.06c-.05-.03-.09-.06-.13-.08l-.14-.08.03-.06c.26-.57.49-1.15.56-1.79.04-.28.02-.57-.04-.85-.09-.37-.29-.63-.64-.75a1.56 1.56 0 0 0-.64-.07c-.23.01-.45.09-.63.24s-.31.35-.37.58c-.1.36-.08.72-.02 1.07.08.41.19.8.35 1.17.07.15.13.3.2.46l-.26.15h-.01c-.01-.02-.02-.03-.03-.05-.33-.49-.68-.95-1.13-1.33-.21-.18-.45-.32-.71-.41-.21-.07-.42-.11-.63-.04-.49.14-.78.49-.9.99-.11.5.04.91.43 1.22.12.1.26.18.4.25.47.23.98.33 1.49.4.15.01.29.03.44.04.01 0 .04.02.04.03.01.1 0 .19 0 .29-.13.01-.26.03-.39.04-.4.04-.79.13-1.18.25-.29.09-.57.23-.82.42-.28.23-.45.53-.44.91 0 .48.22.85.59 1.14.07.05.14.09.22.12.29.11.57.07.86-.05.28-.12.54-.3.77-.53.37-.34.67-.74.95-1.16.02-.02.03-.04.04-.06.08.05.16.09.24.13.01.01.02.02.03.02v.01c-.01.02-.01.03-.02.05-.28.61-.51 1.23-.57 1.91-.03.25-.01.51.06.75.11.38.34.65.72.77.18.05.36.06.54.05.5-.04.84-.33 1-.81.11-.36.09-.73.03-1.1-.08-.38-.19-.75-.33-1.11a8.11 8.11 0 0 1-.22-.52l.26-.14c.06.09.12.18.18.26.29.4.6.78.97 1.1.19.16.39.29.61.38.28.11.56.17.84.05.2-.07.37-.19.5-.35.14-.16.24-.35.29-.56.13-.47.02-.88-.34-1.21Z"></path><path fill="#fff" d="M29.46 41.29c-.93 0-1.6 1.12-1.6 3.25 0 2.02.63 3.17 1.59 3.17 1.08 0 1.59-1.25 1.59-3.25 0-1.91-.49-3.17-1.58-3.17Zm0 0c-.93 0-1.6 1.12-1.6 3.25 0 2.02.63 3.17 1.59 3.17 1.08 0 1.59-1.25 1.59-3.25 0-1.91-.49-3.17-1.58-3.17ZM32.5 0C14.55 0 0 14.55 0 32.5S14.55 65 32.5 65 65 50.44 65 32.5C65 14.56 50.45 0 32.5 0Zm-4.67 14.56c.19-.33.46-.6.79-.76.24-.12.51-.17.77-.15.43.03.8.21 1.14.47l.15.1h.01v-.06c.01-.22 0-.45.01-.67.07-.88.69-1.52 1.4-1.63.36-.06.72-.03 1.06.11.44.18.72.52.89.97.09.28.14.57.14.87v.42c.03-.01.04-.02.05-.04.3-.21.61-.4.97-.49.21-.05.43-.07.64-.03.22.04.42.13.6.26.27.18.49.44.64.74.31.67.28 1.44-.27 2.04-.24.26-.53.46-.85.59-.02 0-.04.01-.05.02 0 0-.01.01-.02.01l.06.03c.25.12.48.27.7.45.61.53.77 1.25.5 1.98-.16.47-.5.85-.93 1.07-.19.1-.41.14-.63.14-.31.01-.6-.06-.87-.2-.14-.09-.27-.17-.4-.27-.05-.03-.09-.07-.14-.12v.08c0 .22 0 .44-.01.66-.05.82-.55 1.39-1.15 1.59-.42.13-.88.13-1.29-.04-.5-.18-.79-.58-.95-1.08-.07-.25-.1-.5-.1-.76v-.44c-.03.02-.05.03-.07.04-.29.21-.61.4-.97.49a1.435 1.435 0 0 1-1.3-.28c-.21-.15-.39-.35-.52-.57-.13-.23-.21-.48-.25-.74-.07-.58.09-1.07.5-1.47.22-.2.47-.37.74-.49l.14-.07a.163.163 0 0 1-.06-.03c-.3-.14-.58-.33-.81-.55-.27-.25-.44-.58-.5-.94-.07-.43.02-.88.24-1.25Zm13.04 16.26v1.2H38.1v2.46h3.01v1.2h-4.63v-8.04h4.63v1.16H38.1v2.02h2.77Zm-24.8 4.88h-1.68v-6.57L12.3 35.7h-1.65L8.4 29.13v6.57H6.85v-8.06h2.63l1.78 6.02.33-.01 1.79-6.01h2.69v8.06Zm3.14 0H17.6v-8.06h1.61v8.06Zm-.06-14.08c-.07-.25-.11-.5-.1-.76v-.44c-.03.02-.05.03-.06.04-.31.21-.62.4-.98.49a1.461 1.461 0 0 1-1.31-.28c-.21-.15-.38-.35-.51-.57-.13-.23-.22-.48-.25-.74-.08-.58.08-1.07.5-1.47.21-.2.46-.37.73-.49l.14-.07-.06-.03c-.3-.14-.57-.33-.81-.55-.26-.25-.44-.58-.5-.94-.06-.43.02-.88.25-1.25.18-.33.46-.59.79-.76.24-.12.51-.17.77-.15.43.03.8.21 1.14.47l.14.1h.02v-.06c0-.22-.01-.45.01-.67.06-.88.69-1.52 1.4-1.63.36-.06.73-.02 1.06.11.44.18.72.52.89.97.09.28.14.57.14.87v.42a.21.21 0 0 0 .06-.04c.29-.21.6-.39.96-.49.21-.05.43-.07.64-.03.22.04.42.13.6.26.27.18.49.44.64.74.31.67.28 1.44-.27 2.04-.24.26-.52.46-.85.59-.02 0-.03.01-.06.02 0 .007-.003.01-.01.01.02.02.04.03.06.03.25.12.49.27.7.45.61.53.77 1.25.51 1.98-.17.47-.5.85-.93 1.07-.2.1-.42.14-.64.14-.31.01-.6-.06-.87-.2-.14-.08-.27-.17-.4-.27-.05-.03-.08-.07-.14-.12v.08c0 .22 0 .44-.01.66-.05.82-.55 1.39-1.15 1.59-.42.14-.88.13-1.3-.04-.49-.18-.78-.58-.94-1.08Zm6.59 26.78h-4.98v-.65l.83-.8c1.99-1.9 2.89-2.91 2.9-4.08 0-.79-.38-1.52-1.55-1.52-.71 0-1.29.36-1.65.66l-.34-.75a3.46 3.46 0 0 1 2.21-.79c1.68 0 2.38 1.15 2.38 2.27 0 1.44-1.04 2.6-2.68 4.18l-.63.58v.02h3.51v.88Zm.98-19.39c-3.28-.99-4.32.38-4.48 2.89-.02 2.39 2.66 3.32 4.48 2.29v1.51c-2.99.31-6.11.11-6.11-3.77s2.37-4.95 6.11-4.29v1.37Zm2.67 19.52c-1.53 0-2.56-1.43-2.58-4.01 0-2.61 1.12-4.05 2.71-4.05 1.64 0 2.58 1.46 2.58 3.95 0 2.65-.99 4.11-2.71 4.11Zm.3-16.51v3.66h-1.65v-8.04h1.68v3.18h3.21v-3.18h1.54v8.04h-1.59v-3.66h-3.19Zm8.36 16.38h-4.98v-.65l.83-.8c1.99-1.9 2.89-2.91 2.9-4.08 0-.79-.38-1.52-1.55-1.52-.7 0-1.29.36-1.65.66l-.34-.75a3.46 3.46 0 0 1 2.21-.79c1.68 0 2.39 1.15 2.39 2.27 0 1.44-1.05 2.6-2.69 4.18l-.62.58v.02h3.5v.88Zm3.17.13c-.88 0-1.65-.28-2.03-.53l.29-.81c.3.19.99.49 1.73.49 1.35 0 1.77-.86 1.76-1.51-.01-1.09-1-1.56-2.02-1.56h-.58v-.79h.58c.77 0 1.74-.4 1.74-1.32 0-.63-.39-1.18-1.36-1.18-.63 0-1.23.28-1.56.52l-.28-.77c.41-.3 1.2-.6 2.04-.6 1.53 0 2.23.91 2.23 1.86 0 .8-.48 1.49-1.44 1.83v.03c.96.19 1.74.91 1.74 2 0 1.25-.97 2.34-2.84 2.34Zm6.28-12.85h-4.61v-8.04h1.64v6.8h2.97v1.24ZM47.23 21c-.3.01-.6-.06-.87-.2-.14-.08-.27-.17-.4-.26-.04-.04-.08-.08-.13-.12v.07c0 .22 0 .44-.01.66-.05.83-.55 1.39-1.15 1.59-.42.14-.88.13-1.3-.03-.49-.19-.78-.58-.94-1.09-.07-.24-.11-.5-.1-.76v-.44c-.03.02-.05.03-.07.04-.29.21-.61.4-.97.49-.22.06-.46.07-.68.02a1.53 1.53 0 0 1-.63-.3c-.21-.15-.38-.35-.51-.57-.13-.23-.22-.48-.25-.74-.04-.27-.02-.55.07-.81.08-.25.23-.48.43-.66.22-.2.47-.37.74-.49l.14-.07a.488.488 0 0 1-.07-.03c-.29-.14-.57-.33-.81-.55-.26-.25-.43-.58-.49-.94-.07-.43.01-.88.24-1.25.19-.33.46-.59.79-.76.24-.12.51-.17.77-.14.43.02.8.2 1.14.46.05.03.1.07.15.1h.01v-.06c0-.22-.01-.45.01-.67.06-.88.69-1.52 1.4-1.63.36-.06.72-.03 1.06.11.44.18.72.52.89.97.1.28.14.57.14.87v.42c.02-.01.04-.02.05-.04.3-.21.61-.4.97-.49.21-.05.43-.07.64-.03.22.04.42.13.6.26.27.18.49.44.63.73.32.68.29 1.45-.26 2.05-.24.26-.53.46-.85.59-.02 0-.04.01-.05.02-.01 0-.01.01-.02.01.02.02.04.02.06.03.25.12.48.27.7.45.61.53.77 1.25.5 1.98-.16.47-.5.85-.93 1.07-.2.1-.42.15-.64.14Zm2.65 14.7h-1.61v-8.06h1.61v8.06Zm6.36-.02-3.09-6v6H51.7v-8.04h1.9l2.9 5.96h.08v-5.96h1.57v8.04h-1.91Zm-26.78 5.61c-.93 0-1.6 1.12-1.6 3.25 0 2.02.63 3.17 1.59 3.17 1.08 0 1.59-1.25 1.59-3.25 0-1.91-.49-3.17-1.58-3.17Zm0 0c-.93 0-1.6 1.12-1.6 3.25 0 2.02.63 3.17 1.59 3.17 1.08 0 1.59-1.25 1.59-3.25 0-1.91-.49-3.17-1.58-3.17Zm0 0c-.93 0-1.6 1.12-1.6 3.25 0 2.02.63 3.17 1.59 3.17 1.08 0 1.59-1.25 1.59-3.25 0-1.91-.49-3.17-1.58-3.17Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="78" height="46" fill="none"><path fill="#fff" d="M71.689 10.896c2.165.296 3.25 1.477 3.25 2.617 0 .764-.553 1.32-1.391 1.32-.707 0-1.31-.556-1.31-1.32 0-.817.576-1.157.576-1.554 0-.316-.261-.871-1.125-1.063M70.438 10.908c-1.937.296-2.742 2.119-2.742 4.282 0 1.83 0 3.291 1.53 3.793-2.454-.526-4.156-1.764-4.156-3.82 0-2.825 2.3-4.112 5.365-4.255M70.438 29.186c-3.677-.29-6.084-1.865-6.084-5.222 0-2.659 1.813-3.941 4.744-4.532-1.613.62-2.12 2.214-2.12 4.532 0 2.462.941 4.688 3.46 5.222"></path><path fill="#fff" d="M74.246 19.656c-2.545.844-4.827 1.423-4.827 2.661 0 0-.148-.167-.184-.474-.238-2.095 2.02-2.847 4.512-3.664 2.754-.895 4.04-1.397 4.04-2.53 0 0 .13.205.157.447.196 1.856-1.547 2.847-3.594 3.53M71.994 29.188c1.937-.296 2.742-2.119 2.742-4.282 0-1.83 0-3.291-1.53-3.793 2.454.525 4.156 1.764 4.156 3.82 0 2.825-2.3 4.111-5.365 4.255M18.306 20.358c-1.307.49-3.865 1.16-6.6 1.16-3.467 0-6.084-.886-8.03-2.75-1.826-1.74-2.89-4.459-2.86-7.577C.816 4.686 5.438.5 12.223.5c2.524 0 4.5.52 5.444.976l-.82 3.025c-1.125-.489-2.495-.886-4.654-.886-4.379 0-7.453 2.6-7.453 7.394 0 4.795 2.858 7.454 7.117 7.454 1.34 0 2.341-.182 2.828-.427v-5.132h-3.618V9.941h7.24v10.417ZM28.248 14.036c-2.647-.06-5.169.519-5.169 2.78 0 1.469.942 2.14 2.13 2.14 1.491 0 2.584-.976 2.92-2.047.092-.274.122-.581.122-.823v-2.047l-.003-.003Zm.487 7.272-.244-1.65H28.4c-.912 1.16-2.465 1.984-4.378 1.984-2.98 0-4.655-2.17-4.655-4.428 0-3.76 3.315-5.652 8.79-5.622v-.245c0-.975-.395-2.596-3.01-2.596-1.46 0-2.979.46-3.986 1.101l-.73-2.443c1.096-.672 3.012-1.313 5.352-1.313 4.744 0 6.114 3.022 6.114 6.263v5.377c0 1.346.059 2.659.213 3.575h-3.377l.003-.003ZM47.29 16.846c0 1.772.059 3.24.121 4.46h-3.285l-.181-2.258h-.06c-.639 1.068-2.1 2.596-4.744 2.596-2.643 0-5.171-1.62-5.171-6.478v-8.74h3.742v8.095c0 2.474.79 4.064 2.769 4.064 1.491 0 2.465-1.068 2.86-2.017a3.42 3.42 0 0 0 .214-1.16V6.425h3.74v10.42h-.006ZM53.277.5h-3.77v20.807h3.77V.5ZM60.397 2.18v4.246h3.558v2.81h-3.558v6.571c0 1.802.487 2.751 1.916 2.751.638 0 1.125-.092 1.461-.182l.06 2.87c-.547.216-1.521.368-2.707.368-1.369 0-2.525-.46-3.223-1.224-.79-.856-1.155-2.199-1.155-4.153v-7h-2.13V6.426h2.13v-3.36l3.65-.886h-.002ZM19.607 36.76c-.122-2.66-.273-5.867-.244-8.645h-.092a109.903 109.903 0 0 1-2.433 7.88l-2.979 8.922h-2.89L8.23 36.118c-.79-2.629-1.52-5.44-2.067-8.003h-.06a473.164 473.164 0 0 1-.365 8.77l-.458 8.28H1.781l1.37-20.595h4.928l2.676 8.28c.73 2.415 1.37 4.858 1.886 7.15h.092a100.565 100.565 0 0 1 2.038-7.182L17.6 24.57h4.866l1.188 20.592h-3.651l-.395-8.402ZM26.965 30.285h3.77v14.881h-3.77v-14.88Zm3.983-4.156c0 1.13-.82 2.017-2.13 2.017s-2.067-.886-2.067-2.017c0-1.13.852-2.047 2.1-2.047 1.248 0 2.068.886 2.097 2.047ZM37.914 24.57h-3.77v20.592h3.77V24.57ZM45.121 24.57h-3.77v20.592h3.77V24.57ZM56.409 37.891c-2.647-.06-5.169.52-5.169 2.781 0 1.468.942 2.14 2.13 2.14 1.491 0 2.585-.976 2.92-2.047.092-.275.122-.582.122-.824v-2.047l-.003-.003Zm.487 7.272-.243-1.65h-.093c-.912 1.16-2.462 1.984-4.378 1.984-2.98 0-4.652-2.17-4.652-4.428 0-3.76 3.315-5.651 8.79-5.622v-.244c0-.976-.395-2.596-3.01-2.596-1.46 0-2.982.46-3.986 1.1l-.73-2.443c1.096-.671 3.012-1.313 5.352-1.313 4.747 0 6.114 3.023 6.114 6.263v5.377c0 1.346.06 2.659.213 3.575h-3.377v-.003ZM76.664 40.702c0 1.772.06 3.24.122 4.46h-3.285l-.181-2.258h-.06c-.639 1.068-2.1 2.596-4.747 2.596-2.646 0-5.168-1.62-5.168-6.478v-8.737h3.743v8.095c0 2.474.79 4.064 2.768 4.064 1.491 0 2.466-1.068 2.858-2.017.121-.334.213-.734.213-1.16v-8.982h3.743v10.417h-.006Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="127" height="26" fill="none"><path fill="#fff" d="M21.353 14.997c0 5.799-4.734 10.503-10.57 10.503S.207 20.796.207 14.997 4.941 4.494 10.777 4.494s10.57 4.704 10.57 10.503M20.719.5H.841v2.94h19.878V.5ZM37.279 20.252c.908 0 2.05-.38 2.667-1.073.171-.187.36-.42.634-.42.36 0 .742.295.742.676 0 .147-.04.295-.171.442-.954 1.073-2.41 1.702-3.85 1.702-2.855 0-5.241-2.309-5.241-5.208 0-2.9 2.244-5.21 5.162-5.21 1.353 0 2.644.546 3.592 1.47.868.863 1.524 2.23 1.524 3.405 0 .527-.148.885-.868.885h-7.909c.235 1.827 1.776 3.342 3.724 3.342m-.063-7.774c-1.925 0-3.3 1.368-3.638 3.11h7.253c-.297-1.742-1.69-3.11-3.615-3.11Zm1.884-6.241c.383 0 .657.335.657.675s-.148.505-.445.692L36.08 9.528a.614.614 0 0 1-.36.102c-.383 0-.657-.335-.657-.67 0-.21.126-.42.383-.59l3.17-1.974a.954.954 0 0 1 .485-.148M53.6 18.487c.36 0 .76.295.76.67 0 .607-1.776 2.417-4.312 2.417-2.832 0-5.225-2.31-5.225-5.17s2.324-5.254 5.225-5.254c1.44 0 2.707.545 3.803 1.64.189.21.469.46.469.778 0 .38-.4.675-.76.675-.485 0-.485-.358-1.016-.817a3.875 3.875 0 0 0-2.518-.948c-2.136 0-3.74 1.85-3.74 3.927 0 2.076 1.627 3.847 3.808 3.847 1.182 0 2.37-.545 3.044-1.532.108-.17.274-.233.462-.233M61.891 21.574c-2.832 0-5.225-2.31-5.225-5.17s2.324-5.254 5.202-5.254 5.265 2.372 5.265 5.232c0 2.86-2.387 5.192-5.242 5.192m3.786-5.21c0-2.161-1.673-3.886-3.786-3.886s-3.763 1.827-3.763 3.927c0 2.099 1.65 3.847 3.786 3.847s3.763-1.85 3.763-3.887ZM69.607 12.642c-.446 0-.697-.232-.697-.67 0-.436.251-.652.697-.652h1.033V8.546c0-.46.252-.755.743-.755.49 0 .742.295.742.755v2.774h2.244c.423 0 .697.21.697.653 0 .442-.274.67-.697.67h-2.244v5.549c0 1.492.337 2.037 1.394 2.037.468 0 .508-.085.782-.085.297 0 .485.21.485.607 0 .8-.885.817-1.479.817-2.261 0-2.667-1.43-2.667-2.69v-6.241h-1.033v.005ZM86.777 21.449c-.485 0-.742-.295-.742-.777v-1.073c-.89 1.305-2.261 1.975-3.912 1.975-2.98 0-5.305-2.208-5.305-5.192 0-2.985 2.37-5.232 5.328-5.232 1.628 0 3.004.67 3.89 1.975V11.95c0-.465.25-.754.741-.754.492 0 .76.295.76.754v8.722c0 .482-.251.777-.76.777m-.822-5.044c0-2.162-1.565-3.927-3.849-3.927-2.284 0-3.826 1.68-3.826 3.927 0 2.246 1.605 3.847 3.826 3.847 2.222 0 3.85-1.742 3.85-3.847ZM92.505 21.448c-.485 0-.742-.295-.742-.777V6.384c0-.483.257-.755.742-.755s.742.272.742.755v6.746c.908-1.305 2.285-1.975 3.89-1.975 2.98 0 5.35 2.208 5.35 5.232s-2.324 5.192-5.328 5.192c-1.627 0-3.004-.675-3.912-1.975v1.073c0 .482-.25.777-.742.777m8.503-5.044c0-2.247-1.605-3.927-3.826-3.927s-3.849 1.765-3.849 3.927 1.565 3.847 3.849 3.847c2.284 0 3.826-1.64 3.826-3.847ZM108.769 20.228c.531 0 .719.25.719.607 0 .693-.673.738-1.205.738-1.416 0-2.387-.902-2.387-2.69v-12.5c0-.482.252-.754.743-.754s.742.272.742.755V18.19c0 1.493.32 2.037 1.394 2.037M116.358 20.252c.908 0 2.05-.38 2.667-1.072.171-.188.36-.42.634-.42.359 0 .742.295.742.675 0 .147-.04.295-.171.443-.954 1.072-2.41 1.702-3.849 1.702-2.855 0-5.242-2.31-5.242-5.21 0-2.899 2.244-5.208 5.162-5.208 1.353 0 2.644.545 3.592 1.47.868.862 1.525 2.23 1.525 3.404 0 .528-.149.885-.868.885h-7.909c.234 1.827 1.775 3.342 3.723 3.342m-.063-7.773c-1.924 0-3.301 1.367-3.638 3.11h7.253c-.297-1.743-1.691-3.11-3.615-3.11M124.267 9.857a1.895 1.895 0 0 1-1.902-1.89c0-1.05.857-1.889 1.908-1.889 1.05 0 1.895.851 1.895 1.89 0 1.038-.85 1.89-1.901 1.89m1.627-1.89c0-.897-.719-1.64-1.627-1.64a1.63 1.63 0 0 0-1.628 1.64c0 .902.72 1.64 1.628 1.64.908 0 1.627-.744 1.627-1.64m-.862.987c0 .08-.086.142-.166.142-.051 0-.091-.029-.12-.085l-.519-.88h-.406v.812c0 .09-.045.141-.137.141-.091 0-.137-.056-.137-.141v-1.85c0-.136.063-.204.206-.204h.491c.388 0 .902.05.902.607 0 .368-.245.556-.599.612l.451.755a.188.188 0 0 1 .028.09m-.16-1.446c0-.33-.291-.369-.645-.369h-.405v.75h.405c.309 0 .645-.035.645-.381Z"></path></svg>
        </div>
        <div className="text-white h-1/2 flex items-end justify-between p-12">
          <Text className="text-[#f2f2f2]">Pavillon gourmand</Text>
          <Text className="text-[#f2f2f2]">Mention légales</Text>
        </div>
      </div>
    </div>
  );
};

export default ModalFooter;

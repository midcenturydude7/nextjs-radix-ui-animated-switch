"use client";
import * as Switch from "@radix-ui/react-switch";

export default function SwitchDemo() {
  return (
    <label className="flex space-x-4">
      <span className="font-medium">Airplane mode</span>
      <Switch.Root className="active:bg-gray-7600 w-11 rounded-full bg-gray-700 p-px shadow-inner shadow-black/50 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 data-[state=checked]:bg-sky-500 active:data-[state=checked]:bg-sky-400">
        <Switch.Thumb className="block h-6 w-6 rounded-full bg-gray-100 shadow-sm transition data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-white" />
      </Switch.Root>
    </label>
  );
}

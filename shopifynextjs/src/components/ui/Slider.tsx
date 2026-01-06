import { useState } from 'react';

export function Slider({
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  className = '',
}: {
  value: number[];
  onValueChange: (value: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [activeThumb, setActiveThumb] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = parseFloat(e.target.value);
    const newValues = [...value];
    newValues[index] = newValue;
    onValueChange(newValues);
  };

  const handleMouseDown = (index: number) => {
    setIsDragging(true);
    setActiveThumb(index);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setActiveThumb(null);
  };

  const percent = (val: number) => ((val - min) / (max - min)) * 100;

  return (
    <div className={`relative w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 ${className}`}>
      <div
        className="absolute h-full rounded-full bg-primary"
        style={{ left: `${percent(value[0])}%`, right: `${100 - percent(value[1])}%` }}
      />
      {value.map((val, index) => (
        <input
          key={index}
          type="range"
          min={min}
          max={max}
          step={step}
          value={val}
          onChange={(e) => handleChange(e, index)}
          onMouseDown={() => handleMouseDown(index)}
          onMouseUp={handleMouseUp}
          className={`absolute w-full h-2 bg-transparent appearance-none pointer-events-none ${
            index === 0 ? 'z-10' : 'z-20'
          }`}
          style={{ zIndex: index === activeThumb ? 30 : index === 0 ? 10 : 20 }}
        />
      ))}
    </div>
  );
}
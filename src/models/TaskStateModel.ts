import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[]; //historico, MainForm
  secondsRemaining: number; //CountDown, historico, MainForm, Button
  formattedSecondsRemaining: string; // titulo, Countdown
  activeTask: TaskModel | null; //CountDown, historico, MainForm, Button
  currentCycle: number; //Home (1 a 8)
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  };
};

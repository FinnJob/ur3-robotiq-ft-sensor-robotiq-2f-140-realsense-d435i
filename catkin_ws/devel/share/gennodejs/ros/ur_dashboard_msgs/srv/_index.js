
"use strict";

let RawRequest = require('./RawRequest.js')
let IsProgramSaved = require('./IsProgramSaved.js')
let GetRobotMode = require('./GetRobotMode.js')
let Load = require('./Load.js')
let GetProgramState = require('./GetProgramState.js')
let GetSafetyMode = require('./GetSafetyMode.js')
let IsInRemoteControl = require('./IsInRemoteControl.js')
let IsProgramRunning = require('./IsProgramRunning.js')
let AddToLog = require('./AddToLog.js')
let GetLoadedProgram = require('./GetLoadedProgram.js')
let Popup = require('./Popup.js')

module.exports = {
  RawRequest: RawRequest,
  IsProgramSaved: IsProgramSaved,
  GetRobotMode: GetRobotMode,
  Load: Load,
  GetProgramState: GetProgramState,
  GetSafetyMode: GetSafetyMode,
  IsInRemoteControl: IsInRemoteControl,
  IsProgramRunning: IsProgramRunning,
  AddToLog: AddToLog,
  GetLoadedProgram: GetLoadedProgram,
  Popup: Popup,
};

// Auto-generated. Do not edit!

// (in-package ur_dashboard_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let RobotMode = require('./RobotMode.js');

//-----------------------------------------------------------

class SetModeGoal {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.target_robot_mode = null;
      this.stop_program = null;
      this.play_program = null;
    }
    else {
      if (initObj.hasOwnProperty('target_robot_mode')) {
        this.target_robot_mode = initObj.target_robot_mode
      }
      else {
        this.target_robot_mode = new RobotMode();
      }
      if (initObj.hasOwnProperty('stop_program')) {
        this.stop_program = initObj.stop_program
      }
      else {
        this.stop_program = false;
      }
      if (initObj.hasOwnProperty('play_program')) {
        this.play_program = initObj.play_program
      }
      else {
        this.play_program = false;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type SetModeGoal
    // Serialize message field [target_robot_mode]
    bufferOffset = RobotMode.serialize(obj.target_robot_mode, buffer, bufferOffset);
    // Serialize message field [stop_program]
    bufferOffset = _serializer.bool(obj.stop_program, buffer, bufferOffset);
    // Serialize message field [play_program]
    bufferOffset = _serializer.bool(obj.play_program, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type SetModeGoal
    let len;
    let data = new SetModeGoal(null);
    // Deserialize message field [target_robot_mode]
    data.target_robot_mode = RobotMode.deserialize(buffer, bufferOffset);
    // Deserialize message field [stop_program]
    data.stop_program = _deserializer.bool(buffer, bufferOffset);
    // Deserialize message field [play_program]
    data.play_program = _deserializer.bool(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 3;
  }

  static datatype() {
    // Returns string type for a message object
    return 'ur_dashboard_msgs/SetModeGoal';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a32b63f0e8a660b2b96916617d699c39';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    # This action is for setting the robot into a desired mode (e.g. RUNNING) and safety mode into a
    # non-critical state (e.g. NORMAL or REDUCED), for example after a safety incident happened.
    
    # goal
    ur_dashboard_msgs/RobotMode target_robot_mode
    
    # Stop program execution before restoring the target mode. Can be used together with 'play_program'.
    bool stop_program
    
    # Play the currently loaded program after target mode is reached.#
    # NOTE: Requesting mode RUNNING in combination with this will make the robot continue the motion it
    # was doing before. This might probably lead into the same problem (protective stop, EM-Stop due to
    # faulty motion, etc.) If you want to be safe, set the 'stop_program' flag below and manually play
    # the program after robot state is returned to normal.
    # This flag will only be used when requesting mode RUNNING
    bool play_program
    
    
    ================================================================================
    MSG: ur_dashboard_msgs/RobotMode
    int8 NO_CONTROLLER=-1
    int8 DISCONNECTED=0
    int8 CONFIRM_SAFETY=1
    int8 BOOTING=2
    int8 POWER_OFF=3
    int8 POWER_ON=4
    int8 IDLE=5
    int8 BACKDRIVE=6
    int8 RUNNING=7
    int8 UPDATING_FIRMWARE=8
    
    int8 mode
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new SetModeGoal(null);
    if (msg.target_robot_mode !== undefined) {
      resolved.target_robot_mode = RobotMode.Resolve(msg.target_robot_mode)
    }
    else {
      resolved.target_robot_mode = new RobotMode()
    }

    if (msg.stop_program !== undefined) {
      resolved.stop_program = msg.stop_program;
    }
    else {
      resolved.stop_program = false
    }

    if (msg.play_program !== undefined) {
      resolved.play_program = msg.play_program;
    }
    else {
      resolved.play_program = false
    }

    return resolved;
    }
};

module.exports = SetModeGoal;

import { ContractInterface } from "ethers";
const CourseContract: ContractInterface = [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"imageHash","type":"string"},{"internalType":"string[]","name":"moduleNames","type":"string[]"},{"internalType":"string[]","name":"moduleDescriptions","type":"string[]"},{"internalType":"string[]","name":"materialHashes","type":"string[]"},{"internalType":"string[]","name":"questionHashes","type":"string[]"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string[]","name":"_name","type":"string[]"},{"internalType":"string[]","name":"_description","type":"string[]"},{"internalType":"string[]","name":"_mHash","type":"string[]"},{"internalType":"string[]","name":"_qHash","type":"string[]"}],"name":"addInitialModules","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newMaintainer","type":"address"}],"name":"addMaintainer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ID","type":"uint256"}],"name":"approveRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"author","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"courseDescription","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"courseImageHash","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"courseName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_nameReq","type":"string"},{"internalType":"string","name":"_descriptionReq","type":"string"},{"internalType":"string[]","name":"_moduleNames","type":"string[]"},{"internalType":"string[]","name":"_moduleDescriptions","type":"string[]"},{"internalType":"string[]","name":"_materialsHash","type":"string[]"},{"internalType":"string[]","name":"_questionsHash","type":"string[]"}],"name":"createRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"currentModules","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"materialsHash","type":"string"},{"internalType":"string","name":"questionsHash","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSummaryInformation","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"index","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"listOfRequests","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"address","name":"author","type":"address"},{"internalType":"bool","name":"confirmed","type":"bool"},{"internalType":"address","name":"approver","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"maintainers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"moduleVersions","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"materialsHash","type":"string"},{"internalType":"string","name":"questionsHash","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"modulesToPush","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"materialsHash","type":"string"},{"internalType":"string","name":"questionsHash","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string[]","name":"_name","type":"string[]"},{"internalType":"string[]","name":"_description","type":"string[]"},{"internalType":"string[]","name":"_mHash","type":"string[]"},{"internalType":"string[]","name":"_qHash","type":"string[]"}],"name":"pushModules","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"requestIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"requestModules","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"materialsHash","type":"string"},{"internalType":"string","name":"questionsHash","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_version","type":"uint256"}],"name":"returnModules","outputs":[{"internalType":"string[]","name":"_name","type":"string[]"},{"internalType":"string[]","name":"_desc","type":"string[]"},{"internalType":"string[]","name":"_materials","type":"string[]"},{"internalType":"string[]","name":"questions","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ID","type":"uint256"}],"name":"returnRequest","outputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"address","name":"_author","type":"address"},{"internalType":"bool","name":"_confirmed","type":"bool"},{"internalType":"address","name":"_approver","type":"address"},{"internalType":"string[]","name":"_moduleNames","type":"string[]"},{"internalType":"string[]","name":"_moduleDescs","type":"string[]"},{"internalType":"string[]","name":"_moduleMaterials","type":"string[]"},{"internalType":"string[]","name":"_modulesQuestions","type":"string[]"}],"stateMutability":"view","type":"function"}];
export default CourseContract;
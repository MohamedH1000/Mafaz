import { Schema, models, model } from "mongoose";

const ResumeSchema = new Schema({
  nationality: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  selectedFile: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Resume = models.Resume || model("Resume", ResumeSchema);

export default Resume;

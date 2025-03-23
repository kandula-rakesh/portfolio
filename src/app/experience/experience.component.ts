import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Neurability Foundation',
      role: 'Software Engineer',
      period: 'Sep 2024 - Present',
      description:
        'Designed System Architecture from scratch. Built UI using React and Styled them using TailWind CSS. Integrated Claude AI using API calls. Introduced Model Context Protocol (MCP) to the team to use advantages of MCP.',
    },
    {
      company: 'Wright State University',
      role: 'Software Developer',
      period: 'Jun 2023 - Jul 2024',
      description:
        'Started working LMS. Built UI using React. Integrated Knowledge Graphs and LLMs to improve the accuracy of LLMs. Implemented RAG.',
    },
    {
      company: 'Huges Systique Corporation',
      role: 'Software Engineer',
      period: 'Jan 2020 - Jul 2022',
      description:
        'Developed Scalable backend applications at HSC. Introduced to more techncial concepts like Kotlin in SpringBoot, Micro-Services, Event Driven Architecture etc. Worked in Agile Team.',
    },
    {
      company: 'NCR Corporation',
      role: 'Jr. Software Engineer',
      period: 'Jun 2019 - Jan 2020',
      description:
        'Started my professional journey at NCR as Java Software Engineer. Improved techincal and collaborative skills.',
    },
  ];

  selectedExperience: Experience = this.experiences[0];

  selectExperience(experience: Experience) {
    this.selectedExperience = experience;
  }
}

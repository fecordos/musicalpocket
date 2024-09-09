import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [MatCardModule, MatSelectModule, MatIconModule, FormsModule],
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.css',
})
export class AudioPlayerComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  isRepeating: boolean = false;
  audioFiles = [
    {
      name: 'Minunățiile orașului',
      band: 'ASCOR Cluj',
      path: './audio/audio1.mp3',
    },
    {
      name: 'Nouă ne plac florile',
      band: 'ASCOR Cluj',
      path: './audio/audio2.mp3',
    },
    {
      name: 'Noapte bună',
      band: 'ASCOR Cluj',
      path: './audio/audio3.mp3',
    },
    {
      name: 'Supa de zarzavat',
      band: 'ASCOR Cluj',
      path: './audio/audio4.mp3',
    },
    { name: 'Elefantul', band: 'ASCOR Cluj', path: './audio/audio5.mp3' },
    {
      name: 'Scoica de mare',
      band: 'ASCOR Cluj',
      path: './audio/audio6.mp3',
    },
    { name: 'Câți', band: 'ASCOR Cluj', path: './audio/audio7.mp3' },
    {
      name: 'S-a aprins o stea',
      band: 'ASCOR Cluj',
      path: './audio/audio8.mp3',
    },
    {
      name: 'Într-o nu știu care seară',
      band: 'ASCOR Cluj',
      path: './audio/audio9.mp3',
    },
    {
      name: 'Iubind așa',
      band: 'ASCOR Cluj',
      path: './audio/audio10.mp3',
    },
    {
      name: 'Avem o țară',
      band: 'ASCOR Cluj',
      path: './audio/audio11.mp3',
    },
    {
      name: 'Stelele să-mi stea',
      band: 'ASCOR Cluj',
      path: './audio/audio12.mp3',
    },
    {
      name: 'Cântă cucu bată-l vina',
      band: 'ASCOR Cluj',
      path: './audio/audio13.mp3',
    },
    {
      name: 'Gată-te codrule bine',
      band: 'ASCOR Cluj',
      path: './audio/audio14.mp3',
    },
    {
      name: 'Basarabie frumoasă',
      band: 'ASCOR Cluj',
      path: './audio/audio15.mp3',
    },
    { name: 'Crezul', band: 'ASCOR Cluj', path: './audio/audio16.mp3' },
    {
      name: 'Când a fost să moară Ștefan',
      band: 'ASCOR Cluj',
      path: './audio/audio17.mp3',
    },
    { name: 'Vremuri', band: 'ASCOR Cluj', path: './audio/audio18.mp3' },
    { name: 'Halleluja', band: 'ASCOR Cluj', path: './audio/audio19.mp3' },
    {
      name: 'Dacii liberi',
      band: 'ASCOR Cluj',
      path: './audio/audio20.mp3',
    },
    {
      name: 'Cântecul potirului',
      band: 'ASCOR Cluj',
      path: './audio/audio21.mp3',
    },
    {
      name: 'Când la rai',
      band: 'ASCOR Cluj',
      path: './audio/audio22.mp3',
    },
    {
      name: 'Dance dance',
      band: 'ASCOR Cluj',
      path: './audio/audio23.mp3',
    },
    { name: 'Vino aici', band: 'ASCOR Cluj', path: './audio/audio24.mp3' },
    {
      name: 'Nu visa la multe lucruri',
      band: 'ASCOR Cluj',
      path: './audio/audio25.mp3',
    },
    {
      name: 'Trei sferturi de cer',
      band: 'ASCOR Cluj',
      path: './audio/audio26.mp3',
    },
    {
      name: 'Cântec de oameni',
      band: 'ASCOR Cluj',
      path: './audio/audio27.mp3',
    },
    {
      name: 'Cât trăim pe acest pământ',
      band: 'ASCOR Cluj',
      path: './audio/audio28.mp3',
    },
    {
      name: 'Spune orice ar fi',
      band: 'ASCOR Cluj',
      path: './audio/audio29.mp3',
    },
    { name: 'Cât de departe', band: 'ASCOR Cluj', path: './audio/audio30.mp3' },
    { name: 'Epilog', band: 'ASCOR Cluj', path: './audio/audio31.mp3' },
    {
      name: 'N-ai nevoie de foarte multe',
      band: 'ASCOR Cluj',
      path: './audio/audio32.mp3',
    },
    {
      name: 'A fost odată Visul',
      band: 'ASCOR Cluj',
      path: './audio/audio33.mp3',
    },
    {
      name: 'Have you ever seen the rain?',
      band: 'ASCOR Cluj',
      path: './audio/audio34.mp3',
    },
    {
      name: 'Dimineață senină',
      band: 'ASCOR Cluj',
      path: './audio/audio35.mp3',
    },
    {
      name: 'Dacă ai ghici',
      band: 'ASCOR Cluj',
      path: './audio/audio36.mp3',
    },
    { name: 'Ideal', band: 'ASCOR Cluj', path: './audio/audio37.mp3' },
    {
      name: 'Lacrimă de dor',
      band: 'ASCOR Cluj',
      path: './audio/audio38.mp3',
    },
    {
      name: 'O lume minunată',
      band: 'ASCOR Cluj',
      path: './audio/audio39.mp3',
    },
    {
      name: 'Broasca țestoasă',
      band: 'ASCOR Cluj',
      path: './audio/audio40.mp3',
    },
    { name: 'Ghinda', band: 'ASCOR Cluj', path: './audio/audio41.mp3' },
    { name: 'Dorul', band: 'ASCOR Cluj', path: './audio/audio42.mp3' },
    {
      name: 'Amintiri cu haiduci',
      band: 'ASCOR Cluj',
      path: './audio/audio43.mp3',
    },
    {
      name: 'Andrii Popa',
      band: 'ASCOR Cluj',
      path: './audio/audio44.mp3',
    },
    {
      name: 'The lion sleeps tonight',
      band: 'ASCOR Cluj',
      path: './audio/audio45.mp3',
    },
    {
      name: 'Tincturi de frunze',
      band: 'ASCOR Cluj',
      path: './audio/audio46.mp3',
    },
  ];
  currentAudioPath: string = this.audioFiles[0].path;
  selectedAudio: { name: string; band: string; path: string } | undefined =
    this.audioFiles[0];

  onFileSelected(filePath: string): void {
    this.currentAudioPath = filePath;
    this.selectedAudio = this.audioFiles.find((audio) => audio.path === filePath);
    this.audioPlayer.nativeElement.src = this.currentAudioPath;
    this.audioPlayer.nativeElement.load();
    this.audioPlayer.nativeElement.play();
  }

  toggleRepeat(): void {
    this.isRepeating = !this.isRepeating;
  }

  onAudioEnded(audioPlayer: HTMLAudioElement): void {
    if(this.isRepeating){
      audioPlayer.currentTime = 0;
      audioPlayer.play();
    } else {
      this.playNextAudio(audioPlayer);
    }
  }

  playNextAudio(audioPlayer: HTMLAudioElement): void {
    const currentIndex = this.audioFiles.findIndex((audio) => audio.path === this.currentAudioPath);
    const nextIndex = (currentIndex + 1) % this.audioFiles.length;
    this.selectedAudio = this.audioFiles[nextIndex];
    this.currentAudioPath = this.selectedAudio.path;
    audioPlayer.src = this.currentAudioPath;
    audioPlayer.play();
  }
}

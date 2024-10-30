import React, { useEffect, useRef } from 'react';

const MusicVisualizer = ({ audio }) => {
    const canvasRef = useRef(null);
    const audioContextRef = useRef(null);
    const analyserRef = useRef(null);
    const dataArrayRef = useRef(null);

    useEffect(() => {
        if (audio) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
            analyserRef.current = audioContextRef.current.createAnalyser();
            const source = audioContextRef.current.createMediaElementSource(audio);
            source.connect(analyserRef.current);
            analyserRef.current.connect(audioContextRef.current.destination);
            analyserRef.current.fftSize = 256; // Size of FFT

            const bufferLength = analyserRef.current.frequencyBinCount; // half the FFT size
            dataArrayRef.current = new Uint8Array(bufferLength); // array for the frequency data

            const draw = () => {
                requestAnimationFrame(draw);
                analyserRef.current.getByteFrequencyData(dataArrayRef.current);
                context.fillStyle = 'rgba(0, 0, 0, 0.8)'; // Background color
                context.fillRect(0, 0, canvas.width, canvas.height);

                const barWidth = (canvas.width / bufferLength) * 2.5; // Width of each bar
                let barHeight;
                let x = 0;

                for (let i = 0; i < bufferLength; i++) {
                    barHeight = dataArrayRef.current[i];
                    context.fillStyle = `rgb(${barHeight + 100}, 50, 50)`; // Color based on frequency data
                    context.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
                    x += barWidth + 1; // Offset for next bar
                }
            };

            draw();
        }
    }, [audio]);

    return (
        <div className="music-visualizer">
            <canvas ref={canvasRef} width="600" height="300"></canvas>
        </div>
    );
};

export default MusicVisualizer;

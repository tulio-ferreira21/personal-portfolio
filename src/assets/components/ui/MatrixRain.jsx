import MatrixRain from 'react-matrix-rain';
export default function MatrixRainComponent() {
    return (
        <MatrixRain
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
            }}
        />
    )
}
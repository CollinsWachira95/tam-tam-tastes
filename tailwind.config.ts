import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Enhanced color palette with more sophisticated tones and depths
				tamtam: {
					orange: {
						DEFAULT: '#E67E22',
						50: '#FDEBD0',
						100: '#FBDBA7',
						200: '#F8C579',
						300: '#F5AE4B',
						400: '#F2971E',
						500: '#E67E22', // Base
						600: '#C76A17',
						700: '#A25511',
						800: '#7E420D',
						900: '#5A3008',
					},
					green: {
						DEFAULT: '#27AE60',
						50: '#D4F5E2',
						100: '#A9EBC5',
						200: '#7EE1A8',
						300: '#53D78B',
						400: '#2ACD6E',
						500: '#27AE60', // Base
						600: '#208F4F',
						700: '#19703D',
						800: '#13502C',
						900: '#0C311A',
					},
					black: '#1A1A1A',
					gray: {
						DEFAULT: '#4A4A4A',
						50: '#F0F0F0',
						100: '#E0E0E0',
						200: '#C2C2C2',
						300: '#A3A3A3',
						400: '#858585',
						500: '#666666',
						600: '#4A4A4A', // Base
						700: '#333333',
						800: '#1F1F1F',
						900: '#0A0A0A',
					},
					light: '#F9F7F3',
					cream: '#F5EFE6',
					accent: '#D35400',
					muted: '#8D8D8D',
					earth: '#8B4513', // New earthy tone
					clay: '#B7713C', // New clay color for earthy feel
					sand: '#E2C9A1', // New sand color for contrast
					ivory: '#FFFFF0', // New ivory tone for elegance
					spice: '#A52A2A', // New spice color for accent
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: '1rem',
				'2xl': '1.5rem',
			},
			fontFamily: {
				'neutra': ['Neutra Text', 'sans-serif'],
			},
			boxShadow: {
				'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
				'elegant': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
				'button': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				'premium': '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
				'card': '0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
				'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				'intense': '0 25px 50px -12px rgba(231, 126, 34, 0.15)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.98)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'reveal': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-up': 'slide-up 0.7s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'reveal': 'reveal 0.6s ease-out',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						color: 'var(--tw-prose-body)',
						lineHeight: '1.75',
						'> *': {
							marginTop: '1.25em',
							marginBottom: '1.25em',
						},
						p: {
							marginTop: '1.25em',
							marginBottom: '1.25em',
							lineHeight: '1.75',
						},
						h1: {
							fontSize: '2.5em',
							marginTop: '0',
							marginBottom: '0.5em',
							lineHeight: '1.15',
						},
						h2: {
							fontSize: '1.75em',
							marginTop: '1.75em',
							marginBottom: '0.5em',
							lineHeight: '1.25',
						},
						h3: {
							fontSize: '1.5em',
							marginTop: '1.5em',
							marginBottom: '0.5em',
							lineHeight: '1.375',
						},
					}
				}
			},
			boxShadow: {
				'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
				'elegant': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
				'button': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        'intense': '0 25px 50px -12px rgba(231, 126, 34, 0.15)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

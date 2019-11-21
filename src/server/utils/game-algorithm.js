/* eslint-disable camelcase */

exports.calculate = inputs => {
	try {
		const inputs_in_array = inputs.replace(/\r/g, '').split('\n');
		const dimensions = parseInt(inputs_in_array[0], 10);
		const initial_position = inputs_in_array[1]
			.replace('(', '')
			.replace(')', '')
			.split(',')
			.map(Number);

		const initial_x_axis = initial_position[0];
		const initial_y_axis = initial_position[1];

		const creature_positions_string_array = inputs_in_array[2]
			.trim()
			.replace(/\)$/, '')
			.replace(/\(/g, '')
			.replace(/\)/g, '.')
			.split('.');

		const creature_positions = [];

		creature_positions_string_array.map(item => {
			creature_positions.push(item.split(',').map(Number));
			return null;
		});

		const list_of_moves = inputs_in_array[3].split('');

		const newly_created_zombies = [];

		const zombie_movement_path = [];

		let zombie_score = 0;
		const final_positions_array = [];

		const positionTester = position_sample => {
			if (position_sample >= dimensions) {
				return 0;
			}
			if (position_sample < 0) {
				return dimensions - 1;
			}
			return position_sample;
		};

		const infectionTester = () => {
			const hash = {};
			for (let i = 0, max = zombie_movement_path.length; i < max; i += 1) {
				hash[zombie_movement_path[i]] = true;
			}
			for (let i = 0, max = creature_positions.length; i < max; i += 1) {
				if (typeof hash[creature_positions[i]] !== 'undefined') {
					newly_created_zombies.push(creature_positions[i]);
					creature_positions.splice(i, 1);
				}
			}
		};

		const movesFilter = (x_axis, y_axis) => {
			let x = x_axis;
			let y = y_axis;
			zombie_movement_path.splice(0, zombie_movement_path.length);
			list_of_moves.map(char => {
				switch (char) {
					case 'U':
						y -= 1;
						y = positionTester(y);
						zombie_movement_path.push([x, y]);
						break;
					case 'R':
						x += 1;
						x = positionTester(x);
						zombie_movement_path.push([x, y]);
						break;
					case 'D':
						y += 1;
						y = positionTester(y);
						zombie_movement_path.push([x, y]);
						break;
					case 'L':
						x -= 1;
						x = positionTester(x);
						zombie_movement_path.push([x, y]);
						break;
					default:
						break;
				}
				return null;
			});
		};

		movesFilter(initial_x_axis, initial_y_axis, list_of_moves);
		final_positions_array.push(zombie_movement_path[zombie_movement_path.length - 1]);

		infectionTester(zombie_movement_path);

		while (newly_created_zombies.length !== 0) {
			zombie_score += 1;
			const new_zombie = newly_created_zombies.shift();
			const x_axis = new_zombie[0];
			const y_axis = new_zombie[1];

			movesFilter(x_axis, y_axis, list_of_moves);
			final_positions_array.push(zombie_movement_path[zombie_movement_path.length - 1]);

			infectionTester(zombie_movement_path);
		}

		let final_positions = '';
		final_positions_array.map(position => {
			final_positions += `(${position[0]},${position[1]}) `;
			return null;
		});

		const results = {
			zombie_score,
			final_positions,
		};

		return results;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error);
		return error;
	}
};
